"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemCompilerModule = void 0;
const common_1 = require("@nestjs/common");
const problemCompiler_controller_1 = require("./problemCompiler.controller");
const problemCompiler_service_1 = require("./problemCompiler.service");
const gemini_service_1 = require("../gemini.service");
const supabase_service_1 = require("../supabase.service");
let ProblemCompilerModule = class ProblemCompilerModule {
};
exports.ProblemCompilerModule = ProblemCompilerModule;
exports.ProblemCompilerModule = ProblemCompilerModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [problemCompiler_controller_1.ProblemCompilerController],
        providers: [problemCompiler_service_1.ProblemCompilerService, gemini_service_1.geminiService, supabase_service_1.SupabaseService],
    })
], ProblemCompilerModule);
//# sourceMappingURL=problemCompiler.module.js.map