import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements AfterViewInit{

  @Input() color : string = 'yellow';
  @Input() backGroundColor : string = 'black';
  @Input() fontSize : string = '25px';

  constructor(private elementRef:ElementRef) { 
    console.log("Color Directive Object Created...!");
    console.log(this.elementRef);
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.background = this.backGroundColor;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    let existingVaue = this.elementRef.nativeElement.innerHTML;
    console.log(existingVaue === '');
    if(existingVaue === ''){
      existingVaue = this.elementRef.nativeElement.defaultValue;
    }
    this.elementRef.nativeElement.innerHTML = "Directive : "+existingVaue;
    if(this.elementRef.nativeElement.nodeName === 'INPUT'){      
      this.elementRef.nativeElement.defaultValue = existingVaue;
    }
    
  }
}
