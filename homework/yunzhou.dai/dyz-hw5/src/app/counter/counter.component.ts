import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  private count = 0;

  public get getCount() {return this.count};

  constructor() { }

  ngOnInit() {
    this.clearCount();
  }

  public countUp() {
    this.count++;
  }

  public clearCount() {
    this.count = 0;
  }

}
