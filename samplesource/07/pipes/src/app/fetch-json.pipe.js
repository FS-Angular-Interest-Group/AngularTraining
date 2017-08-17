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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var FetchJsonPipe = (function () {
    function FetchJsonPipe(http) {
        this.http = http;
        this.cachedData = null;
        this.cachedUrl = '';
    }
    FetchJsonPipe.prototype.transform = function (url) {
        var _this = this;
        if (url !== this.cachedUrl) {
            this.cachedData = null;
            this.cachedUrl = url;
            this.http.get(url)
                .map(function (result) { return result.json(); })
                .subscribe(function (result) { return _this.cachedData = result; });
        }
        return this.cachedData;
    };
    return FetchJsonPipe;
}());
FetchJsonPipe = __decorate([
    core_1.Pipe({
        name: 'fetch',
        pure: false
    }),
    __metadata("design:paramtypes", [http_1.Http])
], FetchJsonPipe);
exports.FetchJsonPipe = FetchJsonPipe;
//# sourceMappingURL=fetch-json.pipe.js.map