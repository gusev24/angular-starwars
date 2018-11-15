import { Directive, ElementRef, OnInit, OnDestroy, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseover')
  handleMouseOver(el) {
    this.backgroundColor = 'red';
  };

  @HostListener('mouseout')
  handleMouseOut(el) {
    this.backgroundColor = 'transparent';
  }

  @HostBinding('style.backgroundColor')
  backgroundColor = 'transparent';

  constructor() { }

}
