import { Component } from '@angular/core';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.css']
})
export class CdsComponent {
  cds: Array<any>;
  canciones: Array<object>;
  constructor(){
    this.canciones = [
      {nombre: 'cancion 1', idAutor: 1},
      {nombre: 'cancion 2', idAutor: 1},
      {nombre: 'cancion 3', idAutor: 2},
      {nombre: 'cancion 4', idAutor: 2},
      {nombre: 'cancion 5', idAutor: 2},
    ]
    this.cds = [
      {id: 1, autor: 'Juan', precio: '10', canciones: this.canciones},
      {id: 2, autor: 'Alberto', precio: '20', canciones: this.canciones}
    ]
    
  }
}
