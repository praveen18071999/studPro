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
exports.AuthenticationService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const supabase_service_1 = require("../supabase.service");
let AuthenticationService = class AuthenticationService {
    constructor(jwtService, supabaseService) {
        this.jwtService = jwtService;
        this.supabaseService = supabaseService;
    }
    async validateUser(email, pass) {
        const { data: user, error } = await this.supabaseService
            .getClient()
            .from('users')
            .select('*')
            .eq('email', email)
            .single();
        if (error) {
            throw new common_1.InternalServerErrorException('User validation failed');
        }
        if (user && (await bcrypt.compare(pass, user.password))) {
            const { password, ...result } = user;
            console.log(result);
            return result;
        }
        console.log('null');
        return null;
    }
    async login(user) {
        console.log(user);
        const payload = { id: user.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async registerUser(email, pass) {
        const hashedPassword = await bcrypt.hash(pass, 10);
        const { data, error } = await this.supabaseService
            .getClient()
            .from('users')
            .insert([{ email, password: hashedPassword }])
            .select();
        console.log(data, error);
        if (error) {
            throw new common_1.InternalServerErrorException('User registration failed');
        }
        return data;
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        supabase_service_1.SupabaseService])
], AuthenticationService);
//# sourceMappingURL=authentication.service.js.map