import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envent-binding-aula',
  templateUrl: './envent-binding-aula.component.html',
  styleUrls: ['./envent-binding-aula.component.css']
})
export class EnventBindingAulaComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo = '';

  isMouseOver: boolean = false;


  botaoClicado(){
    alert('Botão Clicado');
  }

    onKeyUp(evento: KeyboardEvent){
      this.valorAtual =((<HTMLInputElement>evento.target).value);
      // console.log((<HTMLInputElement>evento.target).value);
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
