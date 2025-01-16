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
exports.SupabaseService = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
const config_1 = require("@nestjs/config");
let SupabaseService = class SupabaseService {
    constructor(configService) {
        this.configService = configService;
        console.log('SUPABASE_URL', this.configService.get('SUPABASE_URL'));
        const SUPABASE_URL = this.configService.get('SUPABASE_URL') ||
            'https://rkydvhsvwffocbkxmojg.supabase.co';
        const SUPABASE_API_KEY = this.configService.get('SUPABASE_API_KEY') ||
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJreWR2aHN2d2Zmb2Nia3htb2pnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUwNjA5NzksImV4cCI6MjA1MDYzNjk3OX0.4U7m8X6cjWgpPrCuFLty5sJ6I7UrDD2I4ie5vxkeV34';
        this.supabase = (0, supabase_js_1.createClient)(SUPABASE_URL, SUPABASE_API_KEY);
    }
    getClient() {
        return this.supabase;
    }
};
exports.SupabaseService = SupabaseService;
exports.SupabaseService = SupabaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], SupabaseService);
//# sourceMappingURL=supabase.service.js.map