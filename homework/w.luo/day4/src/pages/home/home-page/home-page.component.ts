import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  name:String = "";

  constructor(private route: Router, private router: ActivatedRoute,) {
      this.router.params.subscribe(params =>{
        this.name  = params['name'];
      })

      if (this.name == undefined)
        this.name = 'nobody';
   }

  ngOnInit() {
  }

  onclick(dest:String)
  {
    if (dest == 'list')
      dest = dest + "/true";
    else
      dest = dest + "/9";

    this.route.navigateByUrl("/" + dest)
  }
}
