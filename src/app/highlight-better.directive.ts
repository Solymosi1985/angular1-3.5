import { Directive, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightBetter]',
  standalone: true
})
export class HighlightBetterDirective {

  constructor(render: Renderer2, elem: ElementRef, ) {


    render.listen(elem.nativeElement, 'mouseenter', ()=>{
      render.setStyle(elem.nativeElement, 'backgroundColor', 'orange');
    })

    render.listen(elem.nativeElement, 'click', ()=>{
      render.setStyle(elem.nativeElement, 'backgroundColor', '');
    })
    
  }

  @HostBinding('attr.backgroundColor') color=''

}
