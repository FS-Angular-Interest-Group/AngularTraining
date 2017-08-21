import { Injectable } from '@angular/core';

@Injectable()
export class SIFService {

    constructor() {
    }

    getPersons(): Array<any> {
        return [
            {
                name: '1987了',
                singer: '李易峰'
            }, {
                name: '浮夸',
                singer: '陈奕迅',
            }, {
                name: '她来听我演唱会',
                singer: '张学友'
            }, {
                name: '他想',
                singer: '张杰'
            }
        ];
    }
}
