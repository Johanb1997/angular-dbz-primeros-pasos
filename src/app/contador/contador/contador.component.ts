import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(-(base))">-{{base}}</button>
    <span>{{ numero }}</span>
    <button (click)="acumular(base)">+{{base}}</button>
    <button (click)="contadorReset()">reset</button>
    `

})

export class ContadorComponent {
  titulo = 'Contador App';
  numero: number = 10;
  public base: number = 5;


  public acumular(valor: number){
    this.numero+=valor;
  }
  contadorReset(){
    this.numero = 0;
  }
}