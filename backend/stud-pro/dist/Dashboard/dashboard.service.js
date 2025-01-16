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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../supabase.service");
let DashboardService = class DashboardService {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
    }
    async getProblemDashboardCharts(userid) {
        try {
            const data = await levelWise(this.supabaseService, userid);
            return data;
        }
        catch (error) {
            console.error('Error getting dashboard charts:', error);
            throw new common_1.InternalServerErrorException('Failed to get dashboard charts');
        }
    }
    async getMonthlySolvedProblems(userid) {
        try {
            const data = await monthWise(this.supabaseService, userid);
            return data;
        }
        catch (error) {
            console.error('Error getting monthly solved problems:', error);
            throw new common_1.InternalServerErrorException('Failed to get monthly solved problems');
        }
    }
    async getAuthoredProblems(userid) {
        try {
            const data = await authoredProblems(this.supabaseService, userid);
            return data;
        }
        catch (error) {
            console.error('Error getting authored problems:', error);
            throw new common_1.InternalServerErrorException('Failed to get authored problems');
        }
    }
    async getAllProblems(pageS, title, level, marks, author) {
        try {
            const data = await allProblems(this.supabaseService, pageS, title, level, marks, author);
            return data;
        }
        catch (error) {
            console.error('Error getting all problems:', error);
            throw new common_1.InternalServerErrorException('Failed to get all problems');
        }
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], DashboardService);
const allProblems = async (supabaseService, pages, title, level, mark, problemauthorname) => {
    const { data, error } = await supabaseService
        .getClient()
        .rpc('allpublishedproblems', {
        level,
        mark,
        pages,
        problemauthorname,
        title,
    });
    if (error) {
        throw new Error(error.message);
    }
    return data;
};
const authoredProblems = async (supabaseService, user_id) => {
    const { data, error } = await supabaseService
        .getClient()
        .rpc('totalproblemscreated', {
        user_id,
    });
    if (error) {
        throw new Error(error.message);
    }
    return data;
};
const monthWise = async (supabaseService, user_id) => {
    const { data, error } = await supabaseService
        .getClient()
        .rpc('problemsolvedmonthwise', {
        user_id,
    });
    if (error) {
        throw new Error(error.message);
    }
    return data;
};
const levelWise = async (supabaseService, user_id) => {
    const { data, error } = await supabaseService
        .getClient()
        .rpc('getproblemlevelstatistics', {
        user_id,
    });
    if (error) {
        throw new Error(error.message);
    }
    return data;
};
//# sourceMappingURL=dashboard.service.js.map