import { Injectable } from '@angular/core';
import { MyList } from './mylist';

@Injectable()
export class MyserviceService {

  private list : MyList;

  constructor() {
    this.list = new MyList();
  }

  getHello() {
    return 'My service hello';
  }

  getList() {
    return this.list.getList();
  }

}
