import { Component } from '@angular/core';

@Component ({
    selector: 'my-pipe',
    template: `
        <p>My birthday is {{birthday | date:"yyyy/MM/dd"}}</p>
        <p>Number rounded: {{ num1 | round }}</p>
    `
})
export class PipeComponent {
    num1 = 11.36;
    birthday = new Date(1988, 5, 16);
}
