import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class DropdownDirective {
  isOpen=false;

  constructor(element:ElementRef, render:Renderer2) { 
    render.listen(element.nativeElement, 'click', ()=>{
      if (this.isOpen) {
        render.removeClass(element.nativeElement.querySelector('.dropdown-menu'), 'show')
      } else {
        render.addClass(element.nativeElement.querySelector('.dropdown-menu'), 'show')
      }
      this.isOpen=!this.isOpen;
    })
    render.listen('window', 'click', (event:Event)=> {
      if (event.target !== element.nativeElement.querySelector('.dropdown-toggle')){
        render.removeClass(element.nativeElement.querySelector('.dropdown-menu'), 'show');
        this.isOpen=false;
      }
    })    
   }
}
