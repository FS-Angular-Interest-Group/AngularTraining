import { Injectable } from '@angular/core';

@Injectable()
export class SIFService {

    constructor() {
    }

    getPersons(): Array<any> {
        return [
            {
                name: '奶德',
                family: '狼家'
            }, {
                name: '劳勃',
                family: '鹿家',
            }, {
                name: '乔佛里',
                family: '狮家'
            }, {
                name: '荆棘女王',
                family: '高庭'
            }
        ];
    }
}
