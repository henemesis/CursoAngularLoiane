import { Directive, HostListener, ElementRef, Renderer2,
HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter')  onMouseOver() {
   /* this._render.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow');*/
    this.backgroundColor = "yellow";
  }

  @HostListener('mouseleave')  onMouseLeave() {
   /* this._render.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white');*/
    this.backgroundColor = "white";
  }

  //Forma mais apropriada para os dois códigos acima
  /* UTILIZANOD HOSTBIND*/

/*@HostBinding('style.backgroundColor') backgroundColor: String;*/
  //Com ele, comento todos os elementos do construtor e do HostListener.


  //USANDO TS. --> getters and setters
  @HostBinding('style.backgroundColor') get setColor() {
      return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(/*private _elementRef: ElementRef,
              private _render: Renderer2*/
  ) { }

}
