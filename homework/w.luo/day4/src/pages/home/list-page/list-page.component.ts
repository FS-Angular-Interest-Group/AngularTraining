import { Component, OnInit, Input } from '@angular/core';
import {HomeService} from '../home.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  employees:any = [];

  constructor(private route: ActivatedRoute, private employeeService:HomeService, private router: Router) {

    this.route.params.subscribe(params => {
      let flag = params['id'];

      if (flag == "true") {
        this.employees = employeeService.employees;
      }
  });

      
   }

  ngOnInit() {


  }

  onclick(dest:String)
  {
     this.router.navigate(['/'+ dest,{'id':11, 'name':'Sam'}])
  }


}
