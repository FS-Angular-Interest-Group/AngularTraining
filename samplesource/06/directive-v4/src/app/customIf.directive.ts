import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ 
    selector: '[customIf]' 
})

export class CustomIfDirective {

    constructor(private templateRef: TemplateRef<any>,
                private viewContainRef: ViewContainerRef) {
    }

    @Input() set customIf(condition: boolean) {
        if (!condition) {
            this.viewContainRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainRef.clear();
        }
    }

}
