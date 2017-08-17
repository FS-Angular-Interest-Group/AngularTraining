import {Component, Input} from '@angular/core';

import {Book} from './book';

@Component ({
    selector: 'app-book-callee',
    template: `
        <h3>{{book.name}} show</h3>
        <p myHighLight>This book, {{book.name}}, is the best, {{masterName}}</p>
    `
})

export class CalleeComponent {
    @Input() book: Book;
    @Input('master') masterName: string;
}
