import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  nome: string = "abc"

  pessoa: any = {
    nome: 'Jous',
    idade: 31
  }

  constructor() { }

  ngOnInit(): void {
  }

}
