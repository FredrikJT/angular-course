import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  //Using the [] brackets tells us that this is an attribute selector
  selector: '[appUnless]'
})
export class UnlessDirective {
  //appUnless is a property in the template.
  //Here in the business logic, we use set to create a setter of the property.
  //This setter of the property is a method which gets executed every time the property changes.
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      //Create a view in the view container which contains our template
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      //Remove everything from the view container
      this.vcRef.clear();
    }
  }

  //templateRef - what should we change
  //vcRef - where should we change it
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
