import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-out-properties',
  templateUrl: './in-out-properties.component.html',
  styleUrls: ['./in-out-properties.component.css']
})
export class InOutPropertiesComponent implements OnInit {

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;

  constructor() { }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  ngOnInit(): void {
  }

}
