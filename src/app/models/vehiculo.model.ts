import { Cliente } from "./cliente.model";

export interface Vehiculo {
  placas:string,
  color:string,
  marca:string,
  modelo:string,
  kilometraje:number,
  cliente?:Cliente
}
