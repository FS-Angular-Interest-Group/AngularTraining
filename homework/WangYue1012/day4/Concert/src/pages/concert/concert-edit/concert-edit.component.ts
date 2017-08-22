import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ConcertService } from '../concert.service'

@Component({
  selector: 'app-concert-edit',
  templateUrl: './concert-edit.component.html',
  styleUrls: ['./concert-edit.component.scss']
})
export class ConcertEditComponent implements OnInit,OnDestroy {
  concertId:string="";
  concert:any={
    name:""
  };
  isNew:boolean = false;

  // Subscribe Declaration
  getConcertSubscribe:any;
  
  constructor(private route: ActivatedRoute,
  private concertServ:ConcertService,
  private location: Location) {
  }
  back(){
    this.location.back();
  }
  save(){
    if(this.isNew){
      this.concertServ.concerts.push(this.concert)
    }
    this.location.back();
  }
  ngOnInit() {
    this.getConcertSubscribe = this.route.params.subscribe(params=>{
      this.getConcert(params['sid']).then(concert=>{
      console.log(concert)
      this.concertId = concert.id;
      this.concert = concert
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getConcertSubscribe.unsubscribe();
  }

  getConcert(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let concert = {name:""}
        this.isNew = true;
        resolve(concert)
      }
      let concert = this.concertServ.concerts.find(item=>item.id == id)
      if(concert){
        resolve(concert)
      }else{
        reject("concert not found")
      }
    })
    return p
}

}
