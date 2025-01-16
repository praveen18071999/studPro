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
exports.FlowChartService = void 0;
const common_1 = require("@nestjs/common");
const gemini_service_1 = require("../gemini.service");
let FlowChartService = class FlowChartService {
    constructor(GeminiService) {
        this.GeminiService = GeminiService;
    }
    async flowChartCode(code) {
        const prompt = `Convert the code to JavaScript and only give me the code with no Explanation. code:${code}`;
        const response = await this.GeminiService.geminiPrompt(prompt);
        return { success: true, actualOutput: response.actualOutput };
    }
};
exports.FlowChartService = FlowChartService;
exports.FlowChartService = FlowChartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gemini_service_1.geminiService])
], FlowChartService);
//# sourceMappingURL=flowChart.service.js.map