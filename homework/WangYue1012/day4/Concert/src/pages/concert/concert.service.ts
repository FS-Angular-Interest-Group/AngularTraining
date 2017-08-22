import { Injectable } from "@angular/core";

@Injectable()
export class ConcertService{
    isLogined:boolean = false;
    concerts: Array < any > = [{
      'id': 1,
     'name':'李易峰',
     'sale':'在售',
     'price':1280,
     'location':'广州',
    },
    {
      'id': 2,
     'name':'梁静茹',
     'sale':'在售',
     'price':1280,
     'location':'广州',
    },
    {
      'id': 3,
     'name':'黄家驹',
     'sale':'在售',
     'price':1380,
     'location':'广州',
    },
    {
      'id': 4,
     'name':'张学友',
     'sale':'售罄',
     'price':1480,
     'location':'深圳',
    },
    {
      'id': 5,
     'name':'陈奕迅',
     'sale':'预售',
     'price':1480,
     'location':'佛山',
    },
    {
      'id': 6,
     'name':'张杰',
     'sale':'预售',
     'price':1280,
     'location':'广州',
    }
  ];

    constructor(){

    }
    search(type,value){
        this.concerts.sort((a,b)=>{
        let result1 = String(a[type]).match(value)
        let result2 = String(b[type]).match(value)

        return Number(result2)-Number(result1);
        });
    }
    getConcerts(){
        return this.concerts;
    }

}

