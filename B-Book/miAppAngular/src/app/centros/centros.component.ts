import { Component, OnInit } from '@angular/core';
import { Centros } from '../centros';
import { CentrosService } from '../centros.service';


@Component({
  selector: 'app-centros',
  templateUrl: './centros.component.html',
  styleUrls: ['./centros.component.css']
})
export class CentrosComponent implements OnInit {

  centros: Centros [] = [];

  constructor(private centroService: CentrosService ) { }

  ngOnInit() {
    this.getMisCentro();
  }

  getMisCentro(): void {
    this.centroService.getCentros()
    .subscribe(centros => this.centros = centros.slice(0, 12));
  }

}
