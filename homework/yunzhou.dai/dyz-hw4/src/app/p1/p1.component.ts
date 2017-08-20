import {Component} from '@angular/core';

@Component({
  selector: 'page1',
  styleUrls: ['./p1.component.css'],
  templateUrl: './p1.component.html'
})
export class P1Component {
  title: string;
  constructor(){
    this.title = 'page-1';
  }
}
