import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  numbers = [1, 2, 3, 4, 5];
  odd = false;

  constructor() { }

  ngOnInit() {
  }

}
