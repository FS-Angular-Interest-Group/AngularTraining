import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {ConcertService} from "../concert.service";

@Component({
  selector: 'app-concert-item',
  templateUrl: './concert-item.component.html',
  styleUrls: ['./concert-item.component.scss']
})
export class ConcertItemComponent implements OnInit {
  @Input() concert:any
  @Output() concertClick = new EventEmitter<any>();
  constructor(private concertServ:ConcertService) { 
  }
  onConcertClick(){
    this.concertClick.emit(this.concert)
  }
  check(){
    if(this.concert.check&&this.concert.check==true){
      this.concert.check = false;
    }else{
      this.concert.check = true
    }
  }
  isChecked(){
    if(this.concert.check&&this.concert.check==true){
      return true
    }else{
      return false
    }
  }
  ngOnInit() {
  }
}
