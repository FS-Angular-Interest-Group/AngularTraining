import { Component, OnInit} from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

const numberlist = [1, 2, 3, 4, 5, 6];
const stringList = ['Lawrence', 'Ken', 'Frank'];

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.css']
})


export class RxjsPageComponent implements OnInit {  

  constructor() {
  // constructor(private observ:Observable<any>) {

    // observ = Observable.from(this.list);
    // observ.subscribe(number =>{
    //   console.log('list: '+ number);
    // })
   }

  ngOnInit() {


    let numberOvserv = Observable.from(numberlist);
    let stringOvserv = Observable.from(stringList);
  
    // merge observable
    let mergeObserv = Observable.merge(numberOvserv,stringOvserv);

    mergeObserv.subscribe(output => {
      console.log('list: '+ output);
    })

    mergeObserv = numberOvserv.map(output => {return 'hi, '+ output});

    mergeObserv.subscribe(output => {
      console.log(output);
    })


    let a = Observable.interval(200).take(5).map(i =>{
      return 'A' + i;
    });

    let b = Observable.interval(100).take(10).map(i =>{
      return 'B' + i;
    });


    let c = Observable.merge(a, b); 

    c.subscribe(output => {
      console.log('list: '+ output);
    })

    // let buttonObserv = Observable.fromEvent(document.querySelector('button'), 'click').scan(function(counta:number){
    //   return counta + 1;
    // },0)

    let buttonObserv = Observable.fromEvent(document.querySelector('button'), 'click').scan(counta => {
      return <number>counta + 1;
    },0)

    buttonObserv.subscribe(output => {
      console.log(output);
    })

  




  }




}


