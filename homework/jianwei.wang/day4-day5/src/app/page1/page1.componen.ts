import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'page1',
  templateUrl: './page1.html',
})
export class Page1Component {

  id:String = "";
constructor(private route: ActivatedRoute){
      this.route.params.subscribe(params=> {

       this.id = params['id'];
       console.log(this.id)

 })
}



ngOninit(){

    }

}