import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightWHostbinding]',
  standalone: true
})
export class HighlightWHostbindingDirective {
  @HostBinding('style.backgroundColor') bgColor = "";

  constructor(render: Renderer2, elem: ElementRef, ) {

    render.listen(elem.nativeElement, 'mouseenter', ()=>{
      this.bgColor='pink';
    })

    render.listen(elem.nativeElement, 'mouseleave', ()=>{
      this.bgColor='';
    })
    
  }

 
}
