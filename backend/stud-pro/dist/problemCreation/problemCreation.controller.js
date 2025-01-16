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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemCreationController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const problemCreation_service_1 = require("./problemCreation.service");
const multer_1 = require("multer");
const jwt_auth_gaurd_1 = require("../jwt-auth.gaurd");
let ProblemCreationController = class ProblemCreationController {
    constructor(ProblemCreationService) {
        this.ProblemCreationService = ProblemCreationService;
    }
    async createProblem(req, res) {
        console.log(req.body);
        const response = await this.ProblemCreationService.createProblem(req.body.questionLink, req.body.problemTitle, req.body.baseTestCaseInputs, req.body.baseTestCasesOutputs, req.body.baseTestCasesExplanation, req.body.actualTestCaseInputs, req.body.actualTestCasesOutputs, req.body.problemLevel, req.body.totalMarks);
        res.json(response);
    }
    async uploadFile(file, req, res) {
        const response = await this.ProblemCreationService.readFile(file, req.body.problemTitle, JSON.parse(req.body.baseTestCaseInputs), JSON.parse(req.body.baseTestCasesOutputs), JSON.parse(req.body.baseTestCasesExplanation), JSON.parse(req.body.actualTestCaseInputs), JSON.parse(req.body.actualTestCasesOutputs), req.body.problemLevel, req.body.totalMarks);
        res.json(response);
    }
};
exports.ProblemCreationController = ProblemCreationController;
__decorate([
    (0, common_1.Post)('createProblem'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProblemCreationController.prototype, "createProblem", null);
__decorate([
    (0, common_1.Post)('uploadFile'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('questionFile')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof multer_1.Multer !== "undefined" && multer_1.Multer.File) === "function" ? _a : Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ProblemCreationController.prototype, "uploadFile", null);
exports.ProblemCreationController = ProblemCreationController = __decorate([
    (0, common_1.Controller)('problemCreation'),
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGuard),
    __metadata("design:paramtypes", [problemCreation_service_1.ProblemCreationService])
], ProblemCreationController);
//# sourceMappingURL=problemCreation.controller.js.map