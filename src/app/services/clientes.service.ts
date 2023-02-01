import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  BACKEND_URL:string = environment.BACKEND_URL;

  constructor(private cliente:HttpClient) { }

  getClientes():Observable<Cliente[]> {
    return this.cliente.get<Cliente[]>(this.BACKEND_URL + "/clientes");
  }
}
