import { Injectable } from '@angular/core';
import {AppComponent} from '../app/app.component';
import {employeeList} from '../app/app.component';

@Injectable()
export class HomeService {


  getEmployeeInfo()
  {
    return employeeList
  }
  

}
