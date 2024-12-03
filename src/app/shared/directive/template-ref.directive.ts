import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplateRef]',
  standalone: true,
})
export default class TemplateRefDirective {
  template = inject(TemplateRef);
}
