import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'Detail',
  styleUrls: ['./Detail.component.css'],
  templateUrl: './Detail.component.html'
})
export class DetailComponent implements OnInit {
  constructor(private route:ActivatedRoute) {
  }

  public dp:String;
  public dp1:String;

  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.dp = params['dp'] || '';
      this.dp1 = params['dp1'] || '';
    })
  }
}
