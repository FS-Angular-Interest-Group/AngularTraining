import { Component } from '@angular/core';

import { Book } from '../book';
import { BookService } from './BookService';

@Component ({
    selector: 'book-list',
    template: `
        <div *ngFor = "let book of books">
         {{book.id}} -- {{book.name}}
        </div>
    `
})
export class BookListComponent {
    books: Book[];
    constructor (bookService: BookService) {
        this.books = bookService.getBooks();
    }
}