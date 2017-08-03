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
var app_component_1 = require("./app.component");
var car_component_1 = require("./car/car.component");
var heroes_component_1 = require("./heroes/heroes.component");
var hero_list_component_1 = require("./heroes/hero-list.component");
var injector_component_1 = require("./injector.component");
var test_component_1 = require("./test.component");
var app_config_1 = require("./app.config");
var user_service_1 = require("./user.service");
var providers_component_1 = require("./providers.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule
        ],
        declarations: [
            app_component_1.AppComponent,
            car_component_1.CarComponent,
            heroes_component_1.HeroesComponent,
            hero_list_component_1.HeroListComponent,
            injector_component_1.InjectorComponent,
            test_component_1.TestComponent,
            providers_component_1.ProvidersComponent,
            providers_component_1.Provider1Component,
            providers_component_1.Provider3Component,
            providers_component_1.Provider4Component,
            providers_component_1.Provider5Component,
            providers_component_1.Provider6aComponent,
            providers_component_1.Provider6bComponent,
            providers_component_1.Provider7Component,
            providers_component_1.Provider8Component,
            providers_component_1.Provider9Component,
            providers_component_1.Provider10Component,
        ],
        providers: [
            user_service_1.UserService,
            { provide: app_config_1.APP_CONFIG, useValue: app_config_1.HERO_DI_CONFIG }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map