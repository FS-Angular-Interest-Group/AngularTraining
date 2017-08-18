import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  templateUrl: './counter.component.html',
  styleUrls: [ './counter.component.css' ]
})

export class CounterComponent  implements OnInit, OnDestroy {

  intervalId = 0;
  seconds = 11;

  clearTimer() { clearInterval(this.intervalId); }

  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown(); }
  stop()  {
    this.clearTimer();
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
      } else {
        if (this.seconds < 0) { this.seconds = 10; } 
      }
    }, 1000);
  }
  
}