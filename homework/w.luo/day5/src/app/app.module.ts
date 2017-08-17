import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {TimerModule} from '../pages/timer/timer.module';
import {FormsModule} from '@angular/forms';

import {TimerFatherComponent} from '../pages/timer/timer-father/timer-father.component';
import {TimerChildrenComponent} from '../pages/timer/timer-children/timer-children.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
    TimerFatherComponent,
    TimerChildrenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [ {path: 'timer', component: TimerFatherComponent},
     ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
