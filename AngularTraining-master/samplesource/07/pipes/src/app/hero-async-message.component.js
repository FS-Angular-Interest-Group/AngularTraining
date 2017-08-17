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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/interval");
require("rxjs/add/operator/map");
require("rxjs/add/operator/take");
var HeroAsyncMessageComponent = (function () {
    function HeroAsyncMessageComponent() {
        this.messages = [
            'You are my hero!',
            'You are the best hero!',
            'Will you be my hero?'
        ];
        this.resend();
    }
    HeroAsyncMessageComponent.prototype.resend = function () {
        var _this = this;
        this.message$ = Observable_1.Observable.interval(500)
            .map(function (i) { return _this.messages[i]; })
            .take(this.messages.length);
    };
    return HeroAsyncMessageComponent;
}());
HeroAsyncMessageComponent = __decorate([
    core_1.Component({
        selector: 'hero-message',
        template: "\n    <h2>Async Hero Message and AsyncPipe</h2>\n    <p>Message: {{ message$ | async }}</p>\n    <button (click)=\"resend()\">Resend</button>",
    }),
    __metadata("design:paramtypes", [])
], HeroAsyncMessageComponent);
exports.HeroAsyncMessageComponent = HeroAsyncMessageComponent;
// Alternative message$ formula:
// this.message$ = Observable.fromArray(this.messages)
//   .map(message => Observable.timer(500).map(() => message))
//   .concatAll();
//# sourceMappingURL=hero-async-message.component.js.map