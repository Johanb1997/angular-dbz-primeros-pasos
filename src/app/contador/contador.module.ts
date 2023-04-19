import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[
        CommonModule, // sirve para ngfor, ng if
    ],
})

export class ContadorModule{}