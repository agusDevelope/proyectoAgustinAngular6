import { Injectable } from '@angular/core';
import { Inicio } from './inicio';
import { inicioList } from './lista-inicio';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor() { }
  getInicios(): Observable<Inicio[]> {
    return of(inicioList);
  }
  getInicio(titulo: string): Observable<Inicio> {
    return of(inicioList.find(inicio => inicio.titulo === titulo));
  }
}