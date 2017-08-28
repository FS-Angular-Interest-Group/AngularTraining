import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from '@angular/animations';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  animations: [
    trigger('listAnimation', [

      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 1})
          ]))
        ]), {optional: true}),

      ])

    ]),

    trigger('detailAnimation', [

      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(0)' })),

      transition('* => in', [
        animate('300ms', keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: .5, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),


      transition('* => out', [
        animate('300ms', keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: .5, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ])

    ])

  ]
})
export class BooksListComponent implements OnInit {
  books: Array<any> = [];
  selectedBook:any;

  state: string = 'in';

  constructor(private http: Http) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.queryData();
    }, 1500);
  }

  queryData() {
    this.http.get('/api/books').map((res: Response) => res.json().data).subscribe(data => {
      this.books = data;
    });
  }

  pushBook() {
    this.books.push({
      'name': 'New Book'
    })
  }

  removeBook() {
    this.books.pop();
  }

  selecteBook(book) {
    this.selectedBook = book;

    // this.state = 'in';

    this.state = this.state === 'out' ? 'in' : 'out';

  }

}
