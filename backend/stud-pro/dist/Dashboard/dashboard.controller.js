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
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
const jwt_auth_gaurd_1 = require("../jwt-auth.gaurd");
let DashboardController = class DashboardController {
    constructor(DashboardService) {
        this.DashboardService = DashboardService;
    }
    async getDashboardCharts(req) {
        console.log(req.user);
        return await this.DashboardService.getProblemDashboardCharts(req.user.id);
    }
    async getMonthlySolvedProblems(req) {
        return await this.DashboardService.getMonthlySolvedProblems(req.user.id);
    }
    async getAuthoredProblems(req) {
        return await this.DashboardService.getAuthoredProblems(req.user.id);
    }
    async getAllProblems(query, res) {
        let { page, title, level, marks, author } = query;
        title = title || null;
        level = level || null;
        marks = marks || null;
        author = author || null;
        const response = await this.DashboardService.getAllProblems(page, title, level, marks, author);
        res.json(response);
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)('getProblemLevelDashboardCharts'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboardCharts", null);
__decorate([
    (0, common_1.Get)('getMonthlySolvedProblems'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getMonthlySolvedProblems", null);
__decorate([
    (0, common_1.Get)('authoredProblems'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getAuthoredProblems", null);
__decorate([
    (0, common_1.Get)('allproblems'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getAllProblems", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)('dashboard'),
    (0, common_1.UseGuards)(jwt_auth_gaurd_1.JwtAuthGuard),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map