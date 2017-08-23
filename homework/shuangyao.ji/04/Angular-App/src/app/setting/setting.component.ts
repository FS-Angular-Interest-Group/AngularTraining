import { Component ,OnInit } from '@angular/core';

@Component({
    selector :'setting',
    styleUrls :['./setting.component.css'],
    templateUrl :'./setting.component.html'
})

export class SettingComponent implements OnInit{
    value :string;
    ngOnInit(){
        this.value = 'I am in SettingComponent ,but want to SpecialComponent through router.';
    }
}