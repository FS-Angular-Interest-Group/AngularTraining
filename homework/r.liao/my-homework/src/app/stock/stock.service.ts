import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {
    constructor(private jsonp: Jsonp) {}

    getRealData(stockList: Array<string>) {
        const params  = new URLSearchParams();
        params.set('callback', 'myCallback');
        const list = stockList.join(',');
        const url = `https://hq.sinajs.cn/list=sh601006`;
        this.jsonp.get(url, {search: params}).map(res => res.json()).subscribe(res => {
            console.log(res._body);
          }, err => {
            console.log(err);
          });
          return null;
    }
}

