import { Directive, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective {

  @Input() appTemplate: string;

  constructor(public template: TemplateRef<any>) { }

  getType() {
    return this.appTemplate;
  }
}
