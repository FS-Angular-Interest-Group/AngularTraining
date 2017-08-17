"use strict";
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
var heroes_1 = require("./heroes");
var FlyingHeroesComponent = (function () {
    function FlyingHeroesComponent() {
        this.heroes = [];
        this.canFly = true;
        this.mutate = true;
        this.title = 'Flying Heroes (pure pipe)';
        this.reset();
    }
    FlyingHeroesComponent.prototype.addHero = function (name) {
        name = name.trim();
        if (!name) {
            return;
        }
        var hero = { name: name, canFly: this.canFly };
        if (this.mutate) {
            // Pure pipe won't update display because heroes array reference is unchanged
            // Impure pipe will display
            this.heroes.push(hero);
        }
        else {
            // Pipe updates display because heroes array is a new object
            this.heroes = this.heroes.concat(hero);
        }
    };
    FlyingHeroesComponent.prototype.reset = function () { this.heroes = heroes_1.HEROES.slice(); };
    return FlyingHeroesComponent;
}());
FlyingHeroesComponent = __decorate([
    core_1.Component({
        selector: 'flying-heroes',
        templateUrl: './flying-heroes.component.html',
        styles: ['#flyers, #all {font-style: italic}']
    }),
    __metadata("design:paramtypes", [])
], FlyingHeroesComponent);
exports.FlyingHeroesComponent = FlyingHeroesComponent;
////// Identical except for impure pipe //////
var FlyingHeroesImpureComponent = (function (_super) {
    __extends(FlyingHeroesImpureComponent, _super);
    function FlyingHeroesImpureComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = 'Flying Heroes (impure pipe)';
        return _this;
    }
    return FlyingHeroesImpureComponent;
}(FlyingHeroesComponent));
FlyingHeroesImpureComponent = __decorate([
    core_1.Component({
        selector: 'flying-heroes-impure',
        templateUrl: './flying-heroes-impure.component.html',
        styles: ['.flyers, .all {font-style: italic}'],
    })
], FlyingHeroesImpureComponent);
exports.FlyingHeroesImpureComponent = FlyingHeroesImpureComponent;
//# sourceMappingURL=flying-heroes.component.js.map