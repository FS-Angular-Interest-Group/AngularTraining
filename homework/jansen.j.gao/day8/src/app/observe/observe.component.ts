import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {
  str:string;

  constructor() { }

  ngOnInit() {
    this.str = "10";
    let counter = 10;

    // 创建Observable对象
    let source = Observable.create(observer => {
      setTimeout(() => observer.next(5), 0);
      setTimeout(() => observer.next(4), 1000);
      setTimeout(() => observer.next(3), 2000);
      setTimeout(() => observer.next(2), 3000);
      setTimeout(() => observer.next(1), 4000);
      setTimeout(() => observer.next(0), 5000);
      counter --;
    });

    // 订阅该对象，并对str赋值。
    let subscription = source.subscribe(value => {
      console.log("value=" + value);
      if(value > 0){
        this.str = value;
      }else{
        this.str = 'Done!';
      }
    });
  }
}
