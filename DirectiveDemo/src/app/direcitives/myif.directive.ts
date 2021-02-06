import { Directive, TemplateRef, ViewContainerRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyif]'
})
export class MyifDirective implements AfterViewInit{

  constructor(private templateRef : TemplateRef<any>,private viewContrainerRef: ViewContainerRef) { 
    console.log("MyIf Directive Object Created...!");
  }

  ngAfterViewInit(){

  }

  @Input() set appMyif(condition : boolean) {
    alert(condition);
    console.log(this.templateRef);
    if(condition){
      this.viewContrainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContrainerRef.clear();
    }
  }
}
