import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  num:number;

  constructor() { }

  ngOnInit() {
  }
}

@Pipe({name: 'round'})
export class RoundingComponent implements PipeTransform {
  transform(value: string,exponent: string): number {
    let num = parseFloat(value) + 0.5;
    return parseInt(num.toString());
  }
}

