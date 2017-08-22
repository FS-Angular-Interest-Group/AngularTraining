import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'rgba(0,0,255,0.5)';
       el.nativeElement.style.color = 'white';
       el.nativeElement.style.borderRadius = "5px"
    }
}