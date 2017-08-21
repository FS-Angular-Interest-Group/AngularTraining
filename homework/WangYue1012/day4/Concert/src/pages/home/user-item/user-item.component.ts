import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user:any
  @Output() userClick = new EventEmitter<any>();
  constructor() { 
  }
  onUserClick(){
    this.userClick.emit(this.user)
  }
  ngOnInit() {
  }

}
