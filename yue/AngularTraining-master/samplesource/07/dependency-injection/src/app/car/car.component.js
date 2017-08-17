"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var car_1 = require("./car");
var car_no_di_1 = require("./car-no-di");
var car_factory_1 = require("./car-factory");
var car_creations_1 = require("./car-creations");
var car_injector_1 = require("./car-injector");
var CarComponent = (function () {
    function CarComponent(car) {
        this.car = car;
        this.factoryCar = (new car_factory_1.CarFactory).createCar();
        this.injectorCar = car_injector_1.useInjector();
        this.noDiCar = new car_no_di_1.Car;
        this.simpleCar = car_creations_1.simpleCar();
        this.superCar = car_creations_1.superCar();
        this.testCar = car_creations_1.testCar();
    }
    return CarComponent;
}());
CarComponent = __decorate([
    core_1.Component({
        selector: 'my-car',
        template: "\n  <h2>Cars</h2>\n  <div id=\"di\">{{car.drive()}}</div>\n  <div id=\"nodi\">{{noDiCar.drive()}}</div>\n  <div id=\"injector\">{{injectorCar.drive()}}</div>\n  <div id=\"factory\">{{factoryCar.drive()}}</div>\n  <div id=\"simple\">{{simpleCar.drive()}}</div>\n  <div id=\"super\">{{superCar.drive()}}</div>\n  <div id=\"test\">{{testCar.drive()}}</div>\n  ",
        providers: [car_1.Car, car_1.Engine, car_1.Tires]
    }),
    __metadata("design:paramtypes", [car_1.Car])
], CarComponent);
exports.CarComponent = CarComponent;
//# sourceMappingURL=car.component.js.map