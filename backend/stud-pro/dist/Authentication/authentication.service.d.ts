import { JwtService } from '@nestjs/jwt';
import { SupabaseService } from 'src/supabase.service';
export declare class AuthenticationService {
    private readonly jwtService;
    private readonly supabaseService;
    constructor(jwtService: JwtService, supabaseService: SupabaseService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    registerUser(email: string, pass: string): Promise<any>;
}
