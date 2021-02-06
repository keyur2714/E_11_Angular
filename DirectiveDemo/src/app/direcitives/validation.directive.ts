import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    selector : '[req]'
})
export class ValidationDirective implements AfterViewInit{
    constructor(private elementRef : ElementRef){
        console.log("Validation Direcitve Object Created...!");
    }

    ngAfterViewInit() {
        console.log(this.elementRef.nativeElement.value);
        let value = this.elementRef.nativeElement.value;
        if(value === ''){
            this.elementRef.nativeElement.value = 'Its Mandatory Field.';
        }
        
    }
}