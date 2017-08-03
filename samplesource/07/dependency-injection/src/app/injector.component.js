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
var car_1 = require("./car/car");
var hero_service_1 = require("./heroes/hero.service");
var hero_service_provider_1 = require("./heroes/hero.service.provider");
var logger_service_1 = require("./logger.service");
var InjectorComponent = (function () {
    function InjectorComponent(injector) {
        this.injector = injector;
    }
    InjectorComponent.prototype.ngOnInit = function () {
        this.car = this.injector.get(car_1.Car);
        this.heroService = this.injector.get(hero_service_1.HeroService);
        this.hero = this.heroService.getHeroes()[0];
    };
    Object.defineProperty(InjectorComponent.prototype, "rodent", {
        get: function () {
            var rousDontExist = "R.O.U.S.'s? I don't think they exist!";
            return this.injector.get(ROUS, rousDontExist);
        },
        enumerable: true,
        configurable: true
    });
    return InjectorComponent;
}());
InjectorComponent = __decorate([
    core_1.Component({
        selector: 'my-injectors',
        template: "\n  <h2>Other Injections</h2>\n  <div id=\"car\">{{car.drive()}}</div>\n  <div id=\"hero\">{{hero.name}}</div>\n  <div id=\"rodent\">{{rodent}}</div>\n  ",
        providers: [car_1.Car, car_1.Engine, car_1.Tires, hero_service_provider_1.heroServiceProvider, logger_service_1.Logger]
    }),
    __metadata("design:paramtypes", [core_1.Injector])
], InjectorComponent);
exports.InjectorComponent = InjectorComponent;
/**
 * R.O.U.S. - Rodents Of Unusual Size
 * // https://www.youtube.com/watch?v=BOv5ZjAOpC8
 */
var ROUS = (function () {
    function ROUS() {
    }
    return ROUS;
}());
//# sourceMappingURL=injector.component.js.map