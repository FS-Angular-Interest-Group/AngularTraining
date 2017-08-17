import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeModule} from '../pages/employee/employee.module';
import {EmployeePageComponent} from '../pages/employee/employee-page/employee-page.component';

import { HomeService } from '../service/home.service';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    RouterModule.forRoot([
      {path:'employee', component: EmployeePageComponent}
    ])
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
