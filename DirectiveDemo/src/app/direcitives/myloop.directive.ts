import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyloop]'
})
export class MyloopDirective {

  constructor(private templateRef: TemplateRef<any>,private viewContainerRef: ViewContainerRef) { }

  @Input('appMyloop') set myLoop(loopCounter : number) {
    //alert(loopCounter);
    for(let i=1;i<=loopCounter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

}
