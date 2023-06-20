import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../components/empresa/Empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  url: string = 'http://localhost:3000/Empresa';

  constructor(private http: HttpClient) { }

  getEmpresa(): Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.url);
  }

  saveEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.url, empresa);
  }
}
