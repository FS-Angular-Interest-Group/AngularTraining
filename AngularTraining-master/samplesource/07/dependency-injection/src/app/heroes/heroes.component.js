"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_service_provider_1 = require("./hero.service.provider");
var HeroesComponent = (function () {
    function HeroesComponent() {
    }
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        template: "\n  <h2>Heroes</h2>\n  <hero-list></hero-list>\n  ",
        providers: [hero_service_provider_1.heroServiceProvider]
    })
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map