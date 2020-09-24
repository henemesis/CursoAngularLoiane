import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriandoModuloComponent } from './criando-modulo.component';



@NgModule({
  declarations: [CriandoModuloComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CriandoModuloComponent
  ]
})

export class CriandoModuloModule { }
