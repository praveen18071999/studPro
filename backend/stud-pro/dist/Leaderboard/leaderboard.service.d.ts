import { SupabaseService } from 'src/supabase.service';
export declare class LeaderBoardService {
    private readonly supabaseService;
    constructor(supabaseService: SupabaseService);
    getLeaderBoard(pages: number, username: string): Promise<any>;
}
