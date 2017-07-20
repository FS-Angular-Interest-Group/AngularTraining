import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Array<any> = [];
  selectedBook:any;
  constructor() { 
    this.books = [{
      'name': 'Java',
      'description': 'Java is a programming language and is commonly used for developing and delivering content on the Web. ',
      'imagePath': 'http://px.thea.cn/Public/Upload/512687/Intro/1461059814.jpg'
    }, {
      'name': 'Swift',
      'description': 'Swift expert Jack Watson-Hamblin walks through the basics of building an iOS app in Apple\'s new language',
      'imagePath': 'http://img2.imgtn.bdimg.com/it/u=115915198,2259288664&fm=26&gp=0.jpg'
    }, {
      'name': 'Kotlin',
      'description': 'Kotlin is a statically typed programming language for the JVM, Android and the browser',
      'imagePath': 'http://img1.imgtn.bdimg.com/it/u=1011491324,3927154791&fm=11&gp=0.jpg'
    }];
  }
  ngOnInit() {
  }

}
