import { SupabaseService } from 'src/supabase.service';
export declare class DashboardService {
    private readonly supabaseService;
    constructor(supabaseService: SupabaseService);
    getProblemDashboardCharts(userid: number): Promise<any>;
    getMonthlySolvedProblems(userid: number): Promise<any>;
    getAuthoredProblems(userid: number): Promise<any>;
    getAllProblems(pageS: number, title: string, level: string, marks: number, author: string): Promise<any>;
}
