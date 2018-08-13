import { Component, OnInit } from '@angular/core';
import { Inicio } from '../inicio';
import { InicioService } from '../inicio.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  inicio: Inicio [] = [];

  constructor(private inicioService: InicioService ) { }

  ngOnInit() {
    this.getInicio();
  }

  getInicio(): void {
    this.inicioService.getInicios()
    .subscribe(inicio => this.inicio = inicio.slice(0, 12));
  }

}