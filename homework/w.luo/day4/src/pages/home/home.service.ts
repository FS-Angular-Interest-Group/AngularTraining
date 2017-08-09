import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http"

import { Location } from '@angular/common';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HomeService{
    employees: Array<any> = [
        {
            'name':"Lawrence",
            'sex':"M",
            'project':"PCA",
            'position':"TL"
        },
        {
            'name': "Sam",
            'sex': "M",
            'project': "PCA",
            'position':"TL"
        },
    ]
}