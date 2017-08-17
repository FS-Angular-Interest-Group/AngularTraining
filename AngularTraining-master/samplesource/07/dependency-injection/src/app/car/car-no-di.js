"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Car without DI
var car_1 = require("./car");
var Car = (function () {
    function Car() {
        this.description = 'No DI';
        this.engine = new car_1.Engine();
        this.tires = new car_1.Tires();
    }
    // Method using the engine and tires
    Car.prototype.drive = function () {
        return this.description + " car with " +
            (this.engine.cylinders + " cylinders and " + this.tires.make + " tires.");
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=car-no-di.js.map