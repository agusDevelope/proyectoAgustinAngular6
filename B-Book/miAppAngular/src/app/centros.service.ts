import { Injectable } from '@angular/core';
import { Centros } from './centros';
import { centrosList } from './listo-centros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentrosService  {

  constructor() { }

  getCentros(): Observable<Centros[]> {
    return of(centrosList);
  }
  getCentro(id: number): Observable<Centros> {
    return of(centrosList.find(centro => centro.id === id));
  }
}

