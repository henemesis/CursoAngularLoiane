import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // Abaixo, uma variável TypeScripit tipada!
  nomePortal: string;

  cursos: string[];

  // Parâmetro do Construtor: Injeção de dependências via construtor
  constructor(private cursoService: CursosService) {

    // Acecssando o compoente via this
    this.nomePortal = 'http://loiane.training';

    // var servico = new CursosService();

    


    this.cursos = this.cursoService.getCursos();
  }

  ngOnInit(): void {
  }

}