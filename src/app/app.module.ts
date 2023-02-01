import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { DetalleVehiculoComponent } from './detalle-vehiculo/detalle-vehiculo.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { FormaVehiculosComponent } from './forma-vehiculos/forma-vehiculos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaVehiculosComponent,
    DetalleVehiculoComponent,
    ListaClientesComponent,
    FormaVehiculosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
