import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../models/vehiculo.model';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {

  mensaje: string = "Hola mundo desde Angular";
  activo: boolean = true;
  lista: string[] = ["Fulano", "Mengano", "Perengano"];
  listaVehiculos: Vehiculo[] = [];

  constructor(private vsService:VehiculosService) { }

  ngOnInit(): void {
    console.log('ngOnOnit()');
    this.listaVehiculos = this.vsService.getVehiculos();
  }

  toggleActivo():void {
    this.activo = !this.activo;
  }

}
