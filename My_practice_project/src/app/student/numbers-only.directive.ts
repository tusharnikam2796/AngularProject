import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private elementRef:ElementRef) { }
  @HostListener('input',['$event'])
  numbersOnly(){
    console.log('numbers only...');
    let contactInputBoxValue=this.elementRef.nativeElement.value;
    console.log(contactInputBoxValue);
    this.elementRef.nativeElement.value=contactInputBoxValue.replace(/[^0-9 ]*/g,'');

    
    
  }

}
