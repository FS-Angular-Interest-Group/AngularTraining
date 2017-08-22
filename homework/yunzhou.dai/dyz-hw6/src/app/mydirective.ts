import {Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})
export class MyHighLightDirective implements OnInit {
    constructor(public el:ElementRef, private renderer: Renderer2){

    }

    ngOnInit(){
        
    }

    @HostListener('mouseover') mouseover(eventData: Event) {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    }

    @HostListener('mouseout') mouseout(eventData: Event) {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    }

}