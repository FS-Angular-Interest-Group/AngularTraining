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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_config_1 = require("./app.config");
var logger_service_1 = require("./logger.service");
var user_service_1 = require("./user.service");
var AppComponent = (function () {
    function AppComponent(config, userService) {
        this.userService = userService;
        this.title = config.title;
    }
    Object.defineProperty(AppComponent.prototype, "isAuthorized", {
        get: function () { return this.user.isAuthorized; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.nextUser = function () { this.userService.getNewUser(); };
    Object.defineProperty(AppComponent.prototype, "user", {
        get: function () { return this.userService.user; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "userInfo", {
        get: function () {
            return "Current user, " + this.user.name + ", is " +
                ((this.isAuthorized ? '' : 'not') + " authorized. ");
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <my-car></my-car>\n    <my-injectors></my-injectors>\n    <my-tests></my-tests>\n    <h2>User</h2>\n    <p id=\"user\">\n      {{userInfo}}\n      <button (click)=\"nextUser()\">Next User</button>\n    <p>\n    <my-heroes id=\"authorized\" *ngIf=\"isAuthorized\"></my-heroes>\n    <my-heroes id=\"unauthorized\" *ngIf=\"!isAuthorized\"></my-heroes>\n    <my-providers></my-providers>\n  ",
        providers: [logger_service_1.Logger]
    }),
    __param(0, core_1.Inject(app_config_1.APP_CONFIG)),
    __metadata("design:paramtypes", [Object, user_service_1.UserService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map