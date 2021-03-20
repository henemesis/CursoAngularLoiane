import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operador-elivs',
  templateUrl: './operador-elivs.component.html',
  styleUrls: ['./operador-elivs.component.css']
})
export class OperadorElivsComponent implements OnInit {

  tarefa: any = {
    desc: 'Descrição da tarefa',
    // responsavel: null
    responsavel: {
      usuario: null
    }
  //  responsavel: {nome: 'Thiago'}
  };
  constructor() { }

  ngOnInit(): void {
  }

}
