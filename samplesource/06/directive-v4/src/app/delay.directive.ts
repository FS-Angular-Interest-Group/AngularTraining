import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ 
    selector: '[itemDelay]' 
})

export class DelayDirective {

    constructor(private templateRef: TemplateRef<any>,
                private viewContainRef: ViewContainerRef) {
    }

    @Input() set itemDelay(timer: number) {
        setTimeout(() => {
            this.viewContainRef.createEmbeddedView(this.templateRef);
        }, timer);
    }
    
}
