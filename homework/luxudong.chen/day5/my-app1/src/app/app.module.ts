import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './countdown-parent.component';
import { CountdownLocalVarParentComponent } from './countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer.component';

let directives: any[] = [CountdownLocalVarParentComponent, CountdownTimerComponent];

if (!/e2e/.test(location.search)) {
  console.log('adding countdown timer examples');
  directives.push(CountdownLocalVarParentComponent);
  directives.push(CountdownTimerComponent);
}


@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
