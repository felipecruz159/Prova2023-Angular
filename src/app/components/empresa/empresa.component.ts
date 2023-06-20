import { EmpresaService } from './../../services/empresa.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Empresa } from './Empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresa: Empresa[] = [];
  formGroupEmpresa: FormGroup;

  ngOnInit(): void {
    this.loadEmpresa();
  }

  constructor(private empresaService: EmpresaService, private formBuilder: FormBuilder) {
    this.formGroupEmpresa = formBuilder.group({
      id: [''],
      nome: [''],
      internacional: [''],
      cnpj: [''],
      contato: ['']
    })
  }

  loadEmpresa(){
    this.empresaService.getEmpresa().subscribe({
      next: data => this.empresa = data
    })
  }

  saveEmpresa(){
    this.empresaService.saveEmpresa(this.formGroupEmpresa.value).subscribe({
      next: data => {
        this.empresa.push(data);
        this.formGroupEmpresa.reset();
      }
    })
  }

  removeEmpresa(empresa: Empresa){
    this.empresaService.removeEmpresa(empresa).subscribe({
      next: () => {
        this.empresa.splice(this.empresa.indexOf(empresa), 1);
      }
    })
  }
}
