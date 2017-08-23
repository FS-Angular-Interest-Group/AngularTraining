import {Component} from '@angular/core';

@Component({
  selector: 'list',
  //templateUrl: './list.html'
  template: `
 <ul>
     <li *ngFor="let list of pageslist">
      <a [routerLink]="['/page',list]"> {{ list }} !</a> 
     </li>
 </ul>
 <a [routerLink]="['/']"> Back to Home Page adf!</a>
  `

  
})
export class ListComponent {
    pageslist = ["Page1","Page2","Page3"]
}

