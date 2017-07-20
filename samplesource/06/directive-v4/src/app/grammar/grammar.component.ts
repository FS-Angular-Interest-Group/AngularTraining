import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit {
  items: Array<any> = [];
  selected: any;
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
