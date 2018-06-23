import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowDescription]'
})
export class ShowDescriptionDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('click') onClick() {
    const description = this.element.nativeElement.nextElementSibling;
    const state = description.hidden;

    this.renderer.setProperty(description, 'hidden', !state);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeCursor('pointer');
  }

  changeCursor(type) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', type)

  }
}
