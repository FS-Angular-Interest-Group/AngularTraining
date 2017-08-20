import { Injectable } from '@angular/core';

import { BOOKS } from '../book';

@Injectable()
export class BookService {
    getBooks() {
        return BOOKS;
    }
}