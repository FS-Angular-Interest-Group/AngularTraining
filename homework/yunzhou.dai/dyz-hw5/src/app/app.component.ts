import { Component, ViewChild } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild(CounterComponent)
  private counter : CounterComponent;

  constructor(){
    //nothing
  }

  countClick() {
    this.counter.countUp();
  }

  clearClick() {
    this.counter.clearCount();
  }

}
