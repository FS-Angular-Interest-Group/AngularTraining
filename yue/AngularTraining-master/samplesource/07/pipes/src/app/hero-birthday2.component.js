"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HeroBirthday2Component = (function () {
    function HeroBirthday2Component() {
        this.birthday = new Date(1988, 3, 15); // April 15, 1988
        this.toggle = true; // start with true == shortDate
    }
    Object.defineProperty(HeroBirthday2Component.prototype, "format", {
        get: function () { return this.toggle ? 'shortDate' : 'fullDate'; },
        enumerable: true,
        configurable: true
    });
    HeroBirthday2Component.prototype.toggleFormat = function () { this.toggle = !this.toggle; };
    return HeroBirthday2Component;
}());
HeroBirthday2Component = __decorate([
    core_1.Component({
        selector: 'hero-birthday2',
        template: "\n    <p>The hero's birthday is {{ birthday | date:format }}</p>\n    <button (click)=\"toggleFormat()\">Toggle Format</button>\n  "
    })
], HeroBirthday2Component);
exports.HeroBirthday2Component = HeroBirthday2Component;
//# sourceMappingURL=hero-birthday2.component.js.map