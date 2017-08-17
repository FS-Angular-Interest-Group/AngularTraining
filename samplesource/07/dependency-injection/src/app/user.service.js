"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User = (function () {
    function User(name, isAuthorized) {
        if (isAuthorized === void 0) { isAuthorized = false; }
        this.name = name;
        this.isAuthorized = isAuthorized;
    }
    return User;
}());
exports.User = User;
// Todo: get the user; don't 'new' it.
var alice = new User('Alice', true);
var bob = new User('Bob', false);
var UserService = (function () {
    function UserService() {
        this.user = bob; // initial user is Bob
    }
    // swap users
    UserService.prototype.getNewUser = function () {
        return this.user = this.user === bob ? alice : bob;
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map