import {ElementRef, Output, ViewChild} from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa(){
    //MODIFICANDO O VALOR NA REFERÊNCIA DO campoValorInput
    this.campoValorInput.nativeElement.value++;

    //console.log utilizado para verificar o retorno do campoValorInput, que ao invés de retornar um HTMLElement retorna
    //um ElementRef
    // console.log(this.campoValorInput);
    // this.valor++
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    if (this.valor > 0) {
      //MODIFICANDO O VALOR NA REFERÊNCIA DO campoValorInput
      this.campoValorInput.nativeElement.value--;

      // this.valor--;
      this.mudouValor.emit({novoValor: this.valor});
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
