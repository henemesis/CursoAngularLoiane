import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]' //=> aplicando a diretiva somente ao background
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef,
              private _renderer: Renderer2) {
    // console.log(this._elementRef); // utilizado para descobrir os elementos que queremos descobrir

    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';

  /* Evitamos o código acima, por questões de segurança. Utilizaremos o
  * RENDER*/
    this._renderer.setStyle(this._elementRef.nativeElement,
      'background-color',
      'yellow');

  }

}
