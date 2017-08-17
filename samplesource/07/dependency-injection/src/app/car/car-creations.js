"use strict";
// Examples with car and engine variations
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
///////// example 1 ////////////
function simpleCar() {
    // Simple car with 4 cylinders and Flintstone tires.
    var car = new car_1.Car(new car_1.Engine(), new car_1.Tires());
    car.description = 'Simple';
    return car;
}
exports.simpleCar = simpleCar;
///////// example 2 ////////////
var Engine2 = (function () {
    function Engine2(cylinders) {
        this.cylinders = cylinders;
    }
    return Engine2;
}());
function superCar() {
    // Super car with 12 cylinders and Flintstone tires.
    var bigCylinders = 12;
    var car = new car_1.Car(new Engine2(bigCylinders), new car_1.Tires());
    car.description = 'Super';
    return car;
}
exports.superCar = superCar;
/////////// example 3 //////////
var MockEngine = (function (_super) {
    __extends(MockEngine, _super);
    function MockEngine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cylinders = 8;
        return _this;
    }
    return MockEngine;
}(car_1.Engine));
var MockTires = (function (_super) {
    __extends(MockTires, _super);
    function MockTires() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.make = 'YokoGoodStone';
        return _this;
    }
    return MockTires;
}(car_1.Tires));
function testCar() {
    // Test car with 8 cylinders and YokoGoodStone tires.
    var car = new car_1.Car(new MockEngine(), new MockTires());
    car.description = 'Test';
    return car;
}
exports.testCar = testCar;
//# sourceMappingURL=car-creations.js.map