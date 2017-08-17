interface IAnimal{
    name?:string;
    age?:number;
    sound():void;
}

class Animal implements IAnimal{
    public name:string;
    public type:string;
    public age:number;

    @testD("test Decorators")
    public sound():void{
        console.log( this.name + " " + this.type + " " + this.age.toString())
    }

    constructor(name:string, type:string, age:number){
        this.name = name;
        this.type = type;
        this.age = age;
    }
}

function testD(param1:string){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log(param1);
    }
}


let dog:Animal = new Animal("dog", "small dog", 2);
let cat:Animal = new Animal("cat", "big cat", 10);

dog.sound();
cat.sound();
