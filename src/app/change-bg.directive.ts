import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {

  @Input() isCorrect : Boolean = false;

  constructor(private element: ElementRef,private render: Renderer2) { }
  
  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.element.nativeElement,'background','#B1D989');
      this.render.setStyle(this.element.nativeElement,'color','#fff');
      this.render.setStyle(this.element.nativeElement,'border','1px solid grey');
    }else{
      this.render.setStyle(this.element.nativeElement,'background','#FFBDC3');
      this.render.setStyle(this.element.nativeElement,'color','#fff');
      this.render.setStyle(this.element.nativeElement,'border','1px solid grey');
    }
  }
}
