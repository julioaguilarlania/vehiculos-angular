import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes:Cliente[] = [];
  constructor(private cliServicio:ClientesService) { }

  ngOnInit(): void {
    this.cliServicio.getClientes().subscribe(
      lista => {this.clientes = lista;}
    );
  }

}
