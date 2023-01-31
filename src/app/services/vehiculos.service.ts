import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private listaVehiculos:Vehiculo[] = [
    {
      placas:'POE0928',
      marca:'M1',
      modelo:'M2022',
      color:'Azul',
      kilometraje:3892
    },
    {
      placas:'PWE9128',
      marca:'M2',
      modelo:'N2021',
      color:'Verde',
      kilometraje:98786
    },
  ];

  constructor() { }

  getVehiculos():Vehiculo[] {
    return this.listaVehiculos;
  }
}
