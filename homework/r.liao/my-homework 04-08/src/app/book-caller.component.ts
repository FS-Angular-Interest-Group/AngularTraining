import {Component} from '@angular/core';

import {BOOKS} from './book';

@Component ({
    selector: 'app-book-caller',
    template: `
        <h2>{{master}} has {{books.length}} books</h2>
        <app-book-callee *ngFor = "let book of books"
            [book] = "book"
            [master] = "master">
        </app-book-callee>
    `
})
export class CallerComponent {
    books = BOOKS;
    master = 'Richard';
}
