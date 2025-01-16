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
exports.ExtractProblemController = void 0;
const common_1 = require("@nestjs/common");
const extractProblem_service_1 = require("./extractProblem.service");
const jwt_auth_gaurd_1 = require("../jwt-auth.gaurd");
let ExtractProblemController = class ExtractProblemController {
    constructor(ExtractProblemService) {
        this.ExtractProblemService = ExtractProblemService;
    }
    async extractProblem(id, res) {
        const response = await this.ExtractProblemService.extractProblem(id);
        res.json(response);
    }
};
exports.ExtractProblemController = ExtractProblemController;
__decorate([
    (0, common_1.Get)('problemData/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ExtractProblemController.prototype, "extractProblem", null);
exports.ExtractProblemController = ExtractProblemController = __decorate([
    (0, common_1.Controller)('extractProblem'),
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGuard),
    __metadata("design:paramtypes", [extractProblem_service_1.extractProblemService])
], ExtractProblemController);
//# sourceMappingURL=extractProblem.controller.js.map