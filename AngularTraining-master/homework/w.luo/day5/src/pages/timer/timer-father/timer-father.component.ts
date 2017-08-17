import { Component, OnInit, Input, Output} from '@angular/core';

import {
  Meta,
  Title
} from '@angular/platform-browser';

import { Http } from '@angular/http'



@Component({
  selector: 'app-timer-father',
  templateUrl: './timer-father.component.html',
  styleUrls: ['./timer-father.component.css']
})
export class TimerFatherComponent implements OnInit {

  hours: number = 0;
  mins:number = 0;
  secs:number = 0;

  remain: any = {
    'hours':0,
    'mins':0,
    'secs':0
  }

  constructor() { }

  ngOnInit() {
  }

  start()
  {
     
     console.log(this.hours, this.mins, this.secs);
     this.remain.hours = this.hours
    //  this.remain.hours = 
  }

  hoursChange($event)
  {
    //console.log($event);
    this.remain.hours = $event;
  }

  minsChange($event)
  {this.remain.mins = $event;}

  secsChange($event)
  {this.remain.secs = $event;}

}
