"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PowerBoostCalculatorComponent = (function () {
    function PowerBoostCalculatorComponent() {
        this.power = 5;
        this.factor = 1;
    }
    return PowerBoostCalculatorComponent;
}());
PowerBoostCalculatorComponent = __decorate([
    core_1.Component({
        selector: 'power-boost-calculator',
        template: "\n    <h2>Power Boost Calculator</h2>\n    <div>Normal power: <input [(ngModel)]=\"power\"></div>\n    <div>Boost factor: <input [(ngModel)]=\"factor\"></div>\n    <p>\n      Super Hero Power: {{power | exponentialStrength: factor}}\n    </p>\n  "
    })
], PowerBoostCalculatorComponent);
exports.PowerBoostCalculatorComponent = PowerBoostCalculatorComponent;
//# sourceMappingURL=power-boost-calculator.component.js.map