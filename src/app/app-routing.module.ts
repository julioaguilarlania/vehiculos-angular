import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleVehiculoComponent } from './detalle-vehiculo/detalle-vehiculo.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';

const routes: Routes = [
  {
    path:'vehiculos',
    component: ListaVehiculosComponent
  },
  {
    path:'vehiculos/:id',
    component: DetalleVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
