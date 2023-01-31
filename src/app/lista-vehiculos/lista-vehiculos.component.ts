import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.css']
})
export class ListaVehiculosComponent implements OnInit {

  mensaje: string = "Hola mundo desde Angular";
  activo: boolean = true;
  lista: string[] = ["Fulano", "Mengano", "Perengano"];

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnOnit()');
  }

  toggleActivo():void {
    this.activo = !this.activo;
  }

}
