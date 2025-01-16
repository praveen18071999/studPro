"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const common_1 = require("@nestjs/common");
const authentication_controller_1 = require("./authentication.controller");
const authentication_service_1 = require("./authentication.service");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const jwt_strategy_1 = require("../jwt.strategy");
const supabase_service_1 = require("../supabase.service");
let AuthenticationModule = class AuthenticationModule {
};
exports.AuthenticationModule = AuthenticationModule;
exports.AuthenticationModule = AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'fuckoff',
                signOptions: { expiresIn: '10d' },
            }),
        ],
        controllers: [authentication_controller_1.AuthenticationController],
        providers: [authentication_service_1.AuthenticationService, jwt_strategy_1.JwtStrategy, supabase_service_1.SupabaseService],
    })
], AuthenticationModule);
//# sourceMappingURL=authentication.module.js.map