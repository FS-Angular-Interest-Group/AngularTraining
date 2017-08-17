import { Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timer-children',
  templateUrl: './timer-children.component.html',
  styleUrls: ['./timer-children.component.css']
})



export class TimerChildrenComponent implements OnInit {

@Input() hours:number
@Input() mins:number
@Input() secs:number
        
@Output()
changehours = new EventEmitter();
@Output()
changemins = new EventEmitter();
@Output()
changesecs = new EventEmitter();

intervalId = 0;


decrease()
{
  // console.log(this.secs)
  this.secs --;

  if (this.secs < 0)
     {
      this.mins --;
      this.secs = 59;
      if (this.mins < 0)
        {
          this.hours --
          this.mins = 59;
          if (this.hours <0)
            {this.hours = 0;
             this.mins = 0;
             this.secs = 0;
             this.clearTimer();
            }
        }
     }
      

  this.changehours.emit(this.hours);
  this.changemins.emit(this.mins);
  this.changesecs.emit(this.secs);
  // this.change.emit(this.secs);
}


  constructor() {   
    // Observable.interval(1000).take(15).repeat(1).subscribe(_ => this.count = _);
    // var timer = 
    
  }

  ngOnInit() {

    
  }


  clearTimer() { clearInterval(this.intervalId); }
  start() { this.countDown(); }
  stop()  { this.clearTimer();}
 
  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
     this.decrease()}, 1000);
  }

}


