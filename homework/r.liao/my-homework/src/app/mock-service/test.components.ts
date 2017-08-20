import { Component } from '@angular/core';

import { BookService } from './BookService';
import { BookListComponent } from "./booklist.component";
import { Book } from '../book';

@Component({
    selector: 'test-component',
    template: `
        <h2>Test Componet</h2>
        <p>Tests {{results.pass}}: {{results.message}}</p>
        <div *ngFor = "let book of books">
         {{book.id}} -- {{book.name}}
        </div>
    `
})
export class BookTestComponent {
    results = runTests()[0];
    books = runTests()[1];
}

/////////////////////////////////////
function runTests() {

  let expectedBooks = [{id: 'TP1', name: 'Java'}, {id: 'TP2', name: 'JS'}]
  let mockService = <BookService> {getBooks: () => expectedBooks }
  let blc;

  it('should have books when BookListComponent created', () => {
    blc = new BookListComponent(mockService);
    expect(blc.books.length).toEqual(expectedBooks.length);
  });

  return [testResults, blc.books];
}

//////////////////////////////////
// Fake Jasmine infrastructure
var testName: string;
var testResults: {pass: string; message: string};

function expect(actual: any) {
  return {
    toEqual: function(expected: any){
      testResults = actual === expected ?
        {pass: 'passed', message: testName} :
        {pass: 'failed', message: `${testName}; expected ${actual} to equal ${expected}.`};
    }
  };
}

function it(label: string, test: () => void) {
  testName = label;
  test();
}
