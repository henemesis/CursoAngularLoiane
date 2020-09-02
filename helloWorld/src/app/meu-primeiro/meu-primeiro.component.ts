import { Component } from '@angular/core'



//Decorator: Informa ao TSC que estamos trabalhando com Angular.
@Component({
    selector: 'meu-primeiro-component',
    template: `
        <p>Meu primeiro component com Angular 2!</p>
    `
})

// export = "expõe" a classe para outros arquivos
export class MeuPrimeiroComponent { 

}