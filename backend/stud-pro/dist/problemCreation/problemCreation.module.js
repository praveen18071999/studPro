"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemCreationModule = void 0;
const common_1 = require("@nestjs/common");
const problemCreation_controller_1 = require("./problemCreation.controller");
const problemCreation_service_1 = require("./problemCreation.service");
const extractProblem_service_1 = require("../extractProblem/extractProblem.service");
const gemini_service_1 = require("../gemini.service");
const supabase_service_1 = require("../supabase.service");
let ProblemCreationModule = class ProblemCreationModule {
};
exports.ProblemCreationModule = ProblemCreationModule;
exports.ProblemCreationModule = ProblemCreationModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [problemCreation_controller_1.ProblemCreationController],
        providers: [
            problemCreation_service_1.ProblemCreationService,
            extractProblem_service_1.extractProblemService,
            gemini_service_1.geminiService,
            supabase_service_1.SupabaseService,
        ],
    })
], ProblemCreationModule);
//# sourceMappingURL=problemCreation.module.js.map