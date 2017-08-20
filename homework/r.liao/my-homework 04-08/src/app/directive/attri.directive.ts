import {Directive, HostListener, ElementRef, Input} from '@angular/core';

@Directive ({selector: '[myHighLight]'})
export class MyHighLightDirective {
    constructor(private el: ElementRef) {
    }

    @Input('myHighLight') highlightColor: string;
    @Input() clickColor: string;

    @HostListener('click') onClick() {
        this.highlight(this.clickColor || 'Red');
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || 'yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
