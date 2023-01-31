import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from '../models/vehiculo.model';
import { VehiculosService } from '../services/vehiculos.service';

@Component({
  selector: 'app-detalle-vehiculo',
  templateUrl: './detalle-vehiculo.component.html',
  styleUrls: ['./detalle-vehiculo.component.css']
})
export class DetalleVehiculoComponent implements OnInit {

  vehiculo:Vehiculo | undefined;

  constructor(private vsService:VehiculosService, private ruta:ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta.paramMap.subscribe(params => {
      var id:string;
      id = String(params.get("id"));
      this.vsService.getVehiculoPorId(id).subscribe(
        v => {this.vehiculo = v}
      );
    });
  }

}
