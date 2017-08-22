import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page2',
  styleUrls: ['./p2.component.css'],
  templateUrl: './p2.component.html'
})
export class P2Component implements OnInit {

  /**
   * title
   */
  public title: string;
  /**
   * detail
   */
  public dt: string;

  /**
   * 
   * @param route Router
   */
  constructor(private route:ActivatedRoute){
    this.title = 'page-2';
  }

  /**
   * Angular event: On Init
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dt = params['dt'];
      console.log(this.dt);
      
    });
  }
}
