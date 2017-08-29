import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private router: Router) {
  }

  gotoList(p1:String){
    //this.param1 = this.route.params['param1'];
    console.log(p1);
    this.router.navigate(['/home', p1]);
  }
}
