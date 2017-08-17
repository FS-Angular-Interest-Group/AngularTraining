"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var flying_heroes_component_1 = require("./flying-heroes.component");
var hero_async_message_component_1 = require("./hero-async-message.component");
var hero_birthday1_component_1 = require("./hero-birthday1.component");
var hero_birthday2_component_1 = require("./hero-birthday2.component");
var hero_list_component_1 = require("./hero-list.component");
var power_booster_component_1 = require("./power-booster.component");
var power_boost_calculator_component_1 = require("./power-boost-calculator.component");
var flying_heroes_pipe_1 = require("./flying-heroes.pipe");
var fetch_json_pipe_1 = require("./fetch-json.pipe");
var exponential_strength_pipe_1 = require("./exponential-strength.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            flying_heroes_component_1.FlyingHeroesComponent,
            flying_heroes_component_1.FlyingHeroesImpureComponent,
            hero_async_message_component_1.HeroAsyncMessageComponent,
            hero_birthday1_component_1.HeroBirthdayComponent,
            hero_birthday2_component_1.HeroBirthday2Component,
            hero_list_component_1.HeroListComponent,
            power_booster_component_1.PowerBoosterComponent,
            power_boost_calculator_component_1.PowerBoostCalculatorComponent,
            flying_heroes_pipe_1.FlyingHeroesPipe,
            flying_heroes_pipe_1.FlyingHeroesImpurePipe,
            fetch_json_pipe_1.FetchJsonPipe,
            exponential_strength_pipe_1.ExponentialStrengthPipe
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map