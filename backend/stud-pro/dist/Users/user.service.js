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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const supabase_service_1 = require("../supabase.service");
let UserService = class UserService {
    constructor(supabaseService) {
        this.supabaseService = supabaseService;
    }
    async updateUser(userData, user_id) {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('users')
            .update(userData)
            .eq('id', user_id).select('name,email,phoneNumber');
        console.log(data);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
    async getUser(user_id) {
        const { data, error } = await this.supabaseService
            .getClient()
            .from('users')
            .select('name,email,phoneNumber')
            .eq('id', user_id);
        console.log(data);
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supabase_service_1.SupabaseService])
], UserService);
//# sourceMappingURL=user.service.js.map