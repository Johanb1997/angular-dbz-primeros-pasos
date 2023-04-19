import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

console.log(uuid());


import { Character } from '../interfaces/character.interfaces';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Broly',
    power: 2000
  },
  {
    id: uuid(),
    name: 'Goku',
    power:5000,
  },
  {
    id: uuid(),
    name: 'vegeta',
    power: 4000,
  },
  {
    id: uuid(),
    name: 'Picollo',
    power: 3000,
  },
  {
    id: uuid(),
    name: 'Krillin',
    power: 400,
  },
  {
    id: uuid(),
    name: 'Gohan',
    power: 3500,
  },
];

addCharacter( character: Character ):void{
  console.log('Main Page: ');
  console.log(character);

  // const newCharacter: Character = {
  //   id: uuid(),
  //   name: character.name,
  //   power: character.power
  // }

  const newCharacter: Character = {
    id: uuid(),
    ...character
  };

  this.characters.push(newCharacter);

}

// onDeleteCharacter(index:number){
//   this.character.splice(index,1);
// }
  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }


}
