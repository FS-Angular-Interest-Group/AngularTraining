import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyserviceService]
})
export class AppComponent {
  title = 'app';
  strs : String[];
  dt : Date = new Date();

  constructor (myservice: MyserviceService) {
    this.title = myservice.getHello();
    this.strs = myservice.getList();
    
  }
  
  
}
