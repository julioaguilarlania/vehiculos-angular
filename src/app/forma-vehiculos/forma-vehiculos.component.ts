import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';
import { Vehiculo } from '../models/vehiculo.model';
import { ClientesService } from '../services/clientes.service';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-forma-vehiculos',
  templateUrl: './forma-vehiculos.component.html',
  styleUrls: ['./forma-vehiculos.component.css']
})
export class FormaVehiculosComponent implements OnInit {

  nuevoVehiculo: Vehiculo = {
    placas:'',
    modelo:'',
    marca:'',
    color:'',
    kilometraje:0,
    cliente:{
      clienteId:0,
      nombre:'',
      curp:'',
      fechaRegistro:''
    }
  }
  clienteId:number = 0;

  listaClientes:Cliente[] = []
  constructor(
    private csService:ClientesService,
    private vsService:VehiculosService,
    private ruteador:Router
    ) { }

  ngOnInit(): void {
    this.csService.getClientes().subscribe(
      lista => {this.listaClientes = lista;}
    );
  }

  agregarVehiculo() {
    console.log('agregarVehiculo()');
    this.nuevoVehiculo.cliente = {
      clienteId: this.clienteId,
      nombre:'',
      curp:'',
      fechaRegistro:''
    };
    this.vsService.guardar(this.nuevoVehiculo).subscribe({
      next:
        res => {
          console.log("Vehiculo guardado");
          this.ruteador.navigate(['/vehiculos']);
        },
      error:
        err => {
          console.log("ERROR");
          console.log(err.message);
        }
    }
    );
  }

}
