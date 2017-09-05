import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({selector:'[myHighlight]'})
export class HighlightDirective{
    constructor(private el: ElementRef)
    {
        
    }
    @HostListener('mouseenter') onmouseenter()

    {
        this.highlight('yellow');
    }
    @HostListener('mouseleave') mouseleave()
    
        {
            this.highlight('green');
        }
    

    private highlight(color: string)
    {
        this.el.nativeElement.style.backgroundColor = color;
    }
}