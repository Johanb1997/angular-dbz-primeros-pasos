import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    heroes: string[]= [
      'Spiderman',
      'Iron Man', 
      'Capitan America', 
      'Hulk', 
      'Wolverine', 
      'Ant Man', 
      'Viuda Negra', 
      'Dr. Strange', 
      'Ojo de Halcón', 
      'Capitana Marvel', 
    ];
    heroeBorrado: string = '';

    borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
    }
    
}
