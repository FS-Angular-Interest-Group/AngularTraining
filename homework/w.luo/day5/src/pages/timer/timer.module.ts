import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerChildrenComponent } from './timer-children/timer-children.component';
import { TimerFatherComponent } from './timer-father/timer-father.component';
import {RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  
  declarations: [TimerChildrenComponent,
                 TimerFatherComponent,
                ]
})
export class TimerModule { }
