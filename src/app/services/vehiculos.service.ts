import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
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

  constructor(private cliente:HttpClient) { }

  getVehiculos():Observable<Vehiculo[]> {
//    return of(this.listaVehiculos);
    return this.cliente.get<Vehiculo[]>(environment.BACKEND_URL + '/vehiculos');
  }

  getVehiculoPorId(id:string):Observable<Vehiculo> {
    return this.cliente.get<Vehiculo>(environment.BACKEND_URL + '/vehiculos/' + id);
  }
}
