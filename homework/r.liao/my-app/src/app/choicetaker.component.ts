import { Component } from '@angular/core';

@Component ({
    selector: 'app-choice-taker',
    template: `
        <h2>What is your choice:</h2>
        <h3>Choice One: {{choice1}}, Choice Two: {{choice2}}, Choice Three: {{choice3}}</h3>
        <app-my-choice *ngFor = "let choicer of choicers"
            [name] = choicer
            (onChose) = "onChose($event)">
        </app-my-choice>
    `
})
export class ChoiceTakerComponent {
    choice1 = 0;
    choice2 = 0;
    choice3 = 0;
    choicers = ['Zhang San', 'Li Si', 'Wang Wu'];

    onChose(choice: number) {
        switch (choice) {
            case 1:
                this.choice1 ++;
                break;
            case 2:
                this.choice2 ++;
                break;
            case 3:
                this.choice3 ++;
                break;
        }
    }
}
