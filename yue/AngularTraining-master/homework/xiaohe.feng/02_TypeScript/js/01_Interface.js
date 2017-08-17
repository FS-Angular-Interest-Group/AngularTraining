var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Animal {
    constructor(name, type, age) {
        this.name = name;
        this.type = type;
        this.age = age;
    }
    sound() {
        console.log(this.name + " " + this.type + " " + this.age.toString());
    }
}
__decorate([
    testD("test Decorators"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Animal.prototype, "sound", null);
function testD(param1) {
    return function (target, propertyKey, descriptor) {
        console.log(param1);
    };
}
let dog = new Animal("dog", "small dog", 2);
let cat = new Animal("cat", "big cat", 10);
dog.sound();
cat.sound();
