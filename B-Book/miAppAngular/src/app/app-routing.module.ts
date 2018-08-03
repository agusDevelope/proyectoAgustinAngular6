import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { InicioComponent} from './inicio/inicio.component';
import { LugaresComponent} from './lugares/lugares.component';
import { QuienesComponent} from './quienes/quienes.component';
import { ContactoComponent} from './contacto/contacto.component';
import { CentrosComponent} from './centros/centros.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'lugares',
    component: LugaresComponent
  },
  {
    path: 'quienes',
    component: QuienesComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
     path: 'centros',
     component: CentrosComponent
  },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
