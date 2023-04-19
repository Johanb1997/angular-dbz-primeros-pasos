import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void{

    // debugger; PARA TODO
    console.log(this.character);

    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
    // this.character.name= '';
    // this.character.power= 0;
  }

}

