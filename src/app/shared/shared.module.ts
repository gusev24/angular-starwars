import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { CircusPipe } from './pipes/circus/circus.pipe';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { TemplateDirective } from './directives/template/template.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HighlightDirective,
    CircusPipe,
    UserCardComponent,
    CardComponent,
    TemplateDirective
  ],
  exports: [
    HighlightDirective,
    UserCardComponent,
    CircusPipe,
    CardComponent,
    TemplateDirective
  ]
})
export class SharedModule { }
