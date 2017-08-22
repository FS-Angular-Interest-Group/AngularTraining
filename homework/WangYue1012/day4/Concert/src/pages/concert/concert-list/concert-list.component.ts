import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';

import {ConcertService} from "../concert.service";
@Component({
  selector: 'app-concert-list',
  templateUrl: './concert-list.component.html',
  styleUrls: ['./concert-list.component.scss']
})
export class ConcertListComponent implements OnInit {
  searchText: string = "";
  searchType: string = "name";
  selectConcert:any={
    name:"No selected"
  };
  searchResult:Array<any>;
  concerts:Array<any>=[];

  getUserClick(ev){
    this.selectConcert = ev
    console.log(ev);
  }
 
  sortByAsccending(type="id") {
    this.concerts.sort((a,b)=>{
      return a[type] - b[type];
    });
  }
  sortByDesccending(type="id") {
    this.concerts.sort((a,b)=>{
      return b[type] - a[type];
    });
  }
  sortByRadom() {
  this.concerts.forEach((concert,index)=>{
    concert.tempIndex = Math.random();
  })
    this.sortByAsccending("tempIndex");
  }
  constructor(meta: Meta, title: Title, private concertServ:ConcertService) {
    this.concerts = this.concertServ.getConcerts()
 
    // Set SEO
    title.setTitle('Da Mai');

    meta.addTags([{
        name: 'author',
        content: 'Wendy'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, Da Mai'
      },
      {
        name: 'description',
        content: 'Welcome to Da Mai.'
      },
    ]);
    // end of SEO
  }

  ngOnInit() {}
}
