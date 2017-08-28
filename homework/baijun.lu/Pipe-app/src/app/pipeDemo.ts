import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './pipeDemo.html',
  styleUrls: ['./pipeDemo.css']
})
export class myPipeDemo implements OnInit {

  number = document.getElementsByClassName("ipt-primary").value
  castNumber = Math.round(number)
  alert(castNumber)

  constructor() { }

  ngOnInit() {
  }

}
