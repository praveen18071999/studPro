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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemCompilerController = void 0;
const common_1 = require("@nestjs/common");
const problemCompiler_service_1 = require("./problemCompiler.service");
const jwt_auth_gaurd_1 = require("../jwt-auth.gaurd");
let ProblemCompilerController = class ProblemCompilerController {
    constructor(problemCompilerService) {
        this.problemCompilerService = problemCompilerService;
    }
    async compile(req, res) {
        const result = [];
        for (let i = 0; i < req.body.input.length; i++) {
            const response = await this.problemCompilerService.compile(req.body.language, req.body.code, req.body.input[i], req.body.expectedOutput[i]);
            result.push(response);
            if (response.error) {
                break;
            }
        }
        console.log(result);
        res.json(result);
    }
    async submit(req, res) {
        const result = [];
        let successCount = 0;
        for (let i = 0; i < req.body.input.length; i++) {
            const response = await this.problemCompilerService.compile(req.body.language, req.body.code, req.body.input[i], req.body.expectedOutput[i]);
            result.push(response);
            if (response.success) {
                successCount++;
            }
            if (response.error) {
                break;
            }
        }
        if (successCount === req.body.input.length) {
            const response = await this.problemCompilerService.updateProblem(req.body.problem, req.body.userid, "test", true, req.body.marks);
            console.log(response);
        }
        res.json(result);
    }
    async changeProgram(req, res) {
        const response = await this.problemCompilerService.changeProgram(req.body.language, req.body.code);
        res.json(response);
    }
};
exports.ProblemCompilerController = ProblemCompilerController;
__decorate([
    (0, common_1.Post)("compileAndRun"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProblemCompilerController.prototype, "compile", null);
__decorate([
    (0, common_1.Post)("submit"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProblemCompilerController.prototype, "submit", null);
__decorate([
    (0, common_1.Post)("changeProgram"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProblemCompilerController.prototype, "changeProgram", null);
exports.ProblemCompilerController = ProblemCompilerController = __decorate([
    (0, common_1.Controller)("problemCompile"),
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGuard),
    __metadata("design:paramtypes", [problemCompiler_service_1.ProblemCompilerService])
], ProblemCompilerController);
//# sourceMappingURL=problemCompiler.controller.js.map