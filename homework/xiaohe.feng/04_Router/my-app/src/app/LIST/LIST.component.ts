import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'LIST',
  styleUrls: ['./LIST.component.css'],
  templateUrl: './LIST.component.html'
})
export class LISTComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  public param1:String;

  ngOnInit(){
    //console.log(this.route.params[0]);
    //this.param1 = this.route.params['param1'] || '';
    this.route.params.subscribe(params => {
      console.log(params['param1']);
      this.param1 = params['param1'];
    });
  }

  gotoDetail(){
    console.log('gotoDetailFromTs');
    this.router.navigate(['/Detail', {dp1:'gotoDetailFromTs'}]);
  }
}
