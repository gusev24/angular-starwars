import { Component, OnInit, QueryList, AfterContentInit, ContentChildren, TemplateRef } from '@angular/core';
import { TemplateDirective } from '../../directives/template/template.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterContentInit {

  headerTemplate: TemplateRef<any>;
  bodyTemplate: TemplateRef<any>;
  footerTemplate: TemplateRef<any>;

  @ContentChildren(TemplateDirective) templates: QueryList<TemplateDirective>;

  constructor() { }

  ngOnInit() { }

  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
          break;
        case 'body':
          this.bodyTemplate = item.template;
          break;
        case 'footer':
          this.footerTemplate = item.template;
          break;
      }
    });
  }
}
