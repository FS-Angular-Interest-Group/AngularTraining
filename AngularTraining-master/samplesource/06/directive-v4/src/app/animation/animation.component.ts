import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  styles: [
    `p {
      width: 100px;
      margin-left: 10px;
    }`
  ],
  animations: [
    trigger('firstAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),
      transition('small <=> large', animate('300ms ease-in', style({
        backgroundColor: 'red'
      })))
    ])
  ]
})
export class AnimationComponent implements OnInit {

  state: string = 'small';

  constructor() { }

  ngOnInit() {
  }

  animation() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

}
