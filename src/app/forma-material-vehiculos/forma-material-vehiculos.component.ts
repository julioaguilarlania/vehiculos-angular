import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../models/cliente.model';
import { ClientesService } from '../services/clientes.service';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-forma-material-vehiculos',
  templateUrl: './forma-material-vehiculos.component.html',
  styleUrls: ['./forma-material-vehiculos.component.css']
})
export class FormaMaterialVehiculosComponent implements OnInit {
  clienteId:number = 0;

  listaClientes:Cliente[] = []
  constructor(
    private csService:ClientesService,
    private vsService:VehiculosService,
    private ruteador:Router
    ) { }

  formaVehiculo = new FormGroup({
    placas: new FormControl('', [Validators.required,
      Validators.pattern("[A-Z]{3}\\d{4}")]),
    marca: new FormControl('', [Validators.required,
      Validators.maxLength(100)]),
    modelo: new FormControl('', [Validators.required,
      Validators.maxLength(200)]),
    color: new FormControl('', [Validators.required]),
    kilometraje: new FormControl('0', [Validators.min(0)]),
  });

  ngOnInit(): void {
    this.csService.getClientes().subscribe(
      lista => {this.listaClientes = lista;}
    );
  }

  getPlacasErrorMessage():string {
    if (this.formaVehiculo.get('placas')?.hasError('required')) {
      return 'Introduzca el campo placas';
    }
    if (this.formaVehiculo.get('placas')?.hasError('pattern')) {
      return "El formato de placas es incorrecto";
    }
    return '';
  }

  getCadenaErrorMessage(nombreControl:string):string {
    if (this.formaVehiculo.get(nombreControl)?.hasError('required')) {
      return 'Introduzca el campo ' + nombreControl;
    }
    if (this.formaVehiculo.get(nombreControl)?.hasError('maxLength')) {
      return 'El valor de ' + nombreControl + ' excede su longitud maxima';
    }
    return '';
  }

  agregarVehiculo() {
    console.log('agregarVehiculo()');
    var obj = this.formaVehiculo.value;
    obj.cliente = {clienteId:this.clienteId};
    this.vsService.guardar(obj).subscribe({
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
