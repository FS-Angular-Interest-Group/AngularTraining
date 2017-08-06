import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit {
  title:string = 'Hi, Everyone!';
  params: string = '';
  items: Array<any> = [];
  selected: any;
  isSpecial: boolean;
  currentChar:string = 'a';
  constructor(private route: ActivatedRoute) {
    this.items = [{
      'name': 'item1'
    }, {
      'name': 'item2'
    }, {
      'name': 'item3'
    }]
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.params = params['id'];
    });
  }

}
