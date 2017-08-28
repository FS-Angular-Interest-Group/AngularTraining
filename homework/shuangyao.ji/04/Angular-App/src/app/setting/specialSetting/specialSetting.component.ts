import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector :'specialSetting',
    styleUrls : ['./specialSetting.component.css'],
    templateUrl :'./specialSetting.component.html'
})

export class SpcialSettingComponent implements OnInit{
    
    constructor(public route : ActivatedRoute){

    }

    ngOnInit(){
        this.route.params.subscribe(
            data => console.log(data.value)
        );
    }
}