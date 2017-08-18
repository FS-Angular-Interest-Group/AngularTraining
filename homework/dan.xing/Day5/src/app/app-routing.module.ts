import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent }  from './counter.component';

const routes: Routes = [
  { path: 'counter',     component: CounterComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
