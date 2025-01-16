"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowChartModule = void 0;
const common_1 = require("@nestjs/common");
const flowChart_controller_1 = require("./flowChart.controller");
const flowChart_service_1 = require("./flowChart.service");
const gemini_service_1 = require("../gemini.service");
let FlowChartModule = class FlowChartModule {
};
exports.FlowChartModule = FlowChartModule;
exports.FlowChartModule = FlowChartModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [flowChart_controller_1.FlowChartController],
        providers: [flowChart_service_1.FlowChartService, gemini_service_1.geminiService],
    })
], FlowChartModule);
//# sourceMappingURL=flowChart.module.js.map