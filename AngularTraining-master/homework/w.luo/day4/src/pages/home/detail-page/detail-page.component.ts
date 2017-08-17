import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  result:String = "";
  id:number = 0

  constructor(private route:ActivatedRoute) {
      this.route.params.subscribe(params => {
          this.id = params["id"]
      })

      if (this.id > 10)
        this.result = "Number greater than 10";
      else
        this.result = "Number not greater than 10";
   }

  ngOnInit() {
  }

}
