import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit {
  title:string = 'Hi, Everyone!';
  items: Array<any> = [];
  selected: any;
  isSpecial: boolean;
  currentChar:string = 'a';
  constructor() {
    this.items = [{
      'name': 'item1'
    }, {
      'name': 'item2'
    }, {
      'name': 'item3'
    }]
  }
  ngOnInit() {
  }

}
