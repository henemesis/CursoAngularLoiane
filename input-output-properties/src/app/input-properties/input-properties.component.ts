import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css'] //,
  // inputs: ['nomeCurso:nome']
})
export class InputPropertiesComponent implements OnInit {

  // Aqui, a variável nome será exposta para o ambiente externo, enquanto dentro
  // dos componentes teremos nomeCurso. Pode também ser declarada como metadado como
  // no exemplo acima (em inputs)!
  @Input('nome') nomeCurso: string = '';

  // É melhor e mais "viável" dar preferência ao decorator @Input


  constructor() { }

  ngOnInit(): void {
  }

}
