import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component ({
    selector: 'app-my-choice',
    template: `
        <h4>{{name}}</h4>
        <button (click) = "choose(1)" [disabled] = "chose">Choice One</button>
        <button (click) = "choose(2)" [disabled] = "chose">Choice Two</button>
        <button (click) = "choose(3)" [disabled] = "chose">Choice Three</button>
    `
})
export class ChoiceComponent {
    @Input() name: string;
    @Output() onChose = new EventEmitter<number>();
    chose = false;

    choose(choice: number) {
        this.onChose.emit(choice);
        this.chose = true;
    }
}
