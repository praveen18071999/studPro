"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractProblemModule = void 0;
const common_1 = require("@nestjs/common");
const extractProblem_controller_1 = require("./extractProblem.controller");
const extractProblem_service_1 = require("./extractProblem.service");
const gemini_service_1 = require("../gemini.service");
const supabase_service_1 = require("../supabase.service");
let ExtractProblemModule = class ExtractProblemModule {
};
exports.ExtractProblemModule = ExtractProblemModule;
exports.ExtractProblemModule = ExtractProblemModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [extractProblem_controller_1.ExtractProblemController],
        providers: [extractProblem_service_1.extractProblemService, gemini_service_1.geminiService, supabase_service_1.SupabaseService],
    })
], ExtractProblemModule);
//# sourceMappingURL=extractProblem.module.js.map