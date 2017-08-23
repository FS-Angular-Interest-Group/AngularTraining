var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var C = (function () {
    function C() {
    }
    C.prototype.foo = function (n) {
        return n * 2;
    };
    __decorate([
        log
    ], C.prototype, "foo", null);
    return C;
}());
function log(target, key, value) {
    if (target === void 0) { target = function () { }; }
    return {
        value: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var a = args.map(function (a) { return JSON.stringify(a); }).join();
            var result = value.value.apply(this, args);
            var r = JSON.stringify(result);
            console.log("Call: " + key + "(" + a + ") => " + r);
            return result;
        }
    };
}
