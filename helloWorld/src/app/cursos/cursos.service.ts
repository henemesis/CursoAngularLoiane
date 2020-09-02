import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

// Classe SERVICE = Utilizada para a conexão com o servidor. (Primariamente)

//http --> é o que conecta o servidor ao Front;

// Utilizada também para reaizar a lógica (Classes utilitárias)

  getCursos(){
    return ['Java', 'Ext JS', 'Angular'];
  }
}
