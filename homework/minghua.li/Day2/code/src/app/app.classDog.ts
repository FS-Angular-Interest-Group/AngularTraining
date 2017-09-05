import {Component} from '@angular/core'
//import {Animal} from '@app.interfaceAnimal';
@Component({
    selector:'my-dog',
    templateUrl: './app.component.html'
}
)
export class Dog implements Animal
{
    name : string;
    age : number;
    constructor(ndname: string, ndage : number)
    {
        this.name=ndname;
        this.age =ndage;
    }
    @log(false)
    greet(){
        return "Dog's age is, " + this.age;
    }

}
function log(value: boolean)
{
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor)
    {
        descriptor.enumerable = value;
    };
}

let dog = new Dog("xiaobai",20);
document.body.innerHTML = dog.greet().toString()
