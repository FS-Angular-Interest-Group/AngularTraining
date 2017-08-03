import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions, Response } from '@angular/http';


@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Array<any> = [];
  selectedBook:any;
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

}
