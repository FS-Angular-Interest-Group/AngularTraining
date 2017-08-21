import { Component }                from '@angular/core';
import { CountdownTimerComponent }  from './countdown-timer.component';
 
@Component({
  selector: 'countdown-parent-lv',
  template: `
  <h3>This is the a timer for your use!</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <countdown-timer #timer></countdown-timer>
  `,
  styleUrls: ['demo.css']
})
export class CountdownLocalVarParentComponent { }