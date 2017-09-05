var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//import Myaminal from '/Animal';
//class Dog implements Animal
var Dog = (function () {
    function Dog(ndname, ndage) {
        this.dname = ndname;
        this.dage = ndage;
    }
    Dog.prototype.greet = function () {
        return "Dog's age is, " + this.dage;
    };
    __decorate([
        enumerable(false)
    ], Dog.prototype, "greet");
    return Dog;
}());
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var dog = new Dog("xiaobai", 10);
console.log(dog.dage);
//document.body.innerHTML = dog.greet().toString();
