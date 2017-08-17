import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ 
    selector: '[myHighlight]' 
})

export class HighlightDirective implements OnInit {

    @Input() myHighlight: string;

    constructor(public el: ElementRef) {
    }

    ngOnInit() {
        console.log(this.myHighlight);
        this.el.nativeElement.style.color = this.myHighlight || 'red';
    }
    
}

