"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.geminiService = void 0;
const common_1 = require("@nestjs/common");
const generative_ai_1 = require("@google/generative-ai");
let geminiService = class geminiService {
    async geminiPrompt(prompt) {
        const genAI = new generative_ai_1.GoogleGenerativeAI('AIzaSyB80VB_BRkozLg_dSmsVjGjfRXvqlGDdtg');
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        const trimString = removeFirstLineAndLastLine(result.response.text().trim());
        console.log(trimString);
        return { success: true, actualOutput: trimString };
    }
    async geminiPromptExtract(prompt) {
        const genAI = new generative_ai_1.GoogleGenerativeAI('AIzaSyB80VB_BRkozLg_dSmsVjGjfRXvqlGDdtg');
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(prompt);
        return { success: true, actualOutput: result.response.text() };
    }
};
exports.geminiService = geminiService;
exports.geminiService = geminiService = __decorate([
    (0, common_1.Injectable)()
], geminiService);
function removeFirstLineAndLastLine(str) {
    return str.split('\n').slice(1, -1).join('\n');
}
//# sourceMappingURL=gemini.service.js.map