import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCharOnly]'
})
export class CharOnlyDirective {

  constructor(private elementRef:ElementRef) { }
@HostListener('input',['$event'])
 onInputChange(){
  console.log('directive calling...');
  let initialInputBoxValue=this.elementRef.nativeElement.value;
  console.log(initialInputBoxValue);
  this.elementRef.nativeElement.value=initialInputBoxValue.replace(/[^a-zA-z ]*/g,'')
  
 }
}
