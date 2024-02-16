import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlight]',
})
export class HighlightDirective {
 
  constructor(private elem:ElementRef) {}

  @HostListener('mouseenter') onHover() {
    this.highlight('orange');
  }

  @HostListener('mouseleave') onLeave(){
    this.highlight('lightgreen')
  }

  @HostListener('blur') onClick(){
    this.highlight('')
  }

  private highlight(color:string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}
