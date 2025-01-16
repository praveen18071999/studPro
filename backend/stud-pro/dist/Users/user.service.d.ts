import { SupabaseService } from 'src/supabase.service';
export declare class UserService {
    private readonly supabaseService;
    constructor(supabaseService: SupabaseService);
    updateUser(userData: any, user_id: number): Promise<{
        name: any;
        email: any;
        phoneNumber: any;
    }[]>;
    getUser(user_id: number): Promise<{
        name: any;
        email: any;
        phoneNumber: any;
    }[]>;
}
