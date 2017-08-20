import { Component } from '@angular/core';

import { BookService } from './BookService';

@Component ({
    selector: 'my-books',
    providers: [BookService],
    template: `
        <h2>Book Service</h2>
        <book-list></book-list>
    `
})
export class BooksComponent {
}
