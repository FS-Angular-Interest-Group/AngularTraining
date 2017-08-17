import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../service/home.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  employees:any = "";

  constructor(private homeService:HomeService) {
        this.employees = this.homeService.getEmployeeInfo()
   }

  ngOnInit() {
  }

}
