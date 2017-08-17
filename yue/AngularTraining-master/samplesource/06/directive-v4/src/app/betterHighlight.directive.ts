import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({ 
    selector: '[myBetterHighlight]' 
})

export class BetterHighlightDirective implements OnInit {

    constructor(public el: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        // https://angular.io/api/core/Renderer2
        this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    }

    @HostListener('click') click(eventData: Event) {
        this.renderer.setStyle(this.el.nativeElement, 'color', '#18A2A1');
    }

    @HostListener('dblclick') dblclick(eventData: Event) {
        this.renderer.setStyle(this.el.nativeElement, 'color', '#F7B475');
    }
    
}

