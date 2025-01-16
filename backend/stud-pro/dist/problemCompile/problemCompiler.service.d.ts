import { geminiService } from 'src/gemini.service';
import { SupabaseService } from 'src/supabase.service';
export declare class ProblemCompilerService {
    private readonly GeminService;
    private readonly supabaseService;
    constructor(GeminService: geminiService, supabaseService: SupabaseService);
    compile(language: string, code: string, input: string, expectedOutput: string): Promise<{
        success: boolean;
        actualOutput: string;
        error?: string;
    }>;
    changeProgram(language: string, code: string): Promise<{
        success: boolean;
        actualOutput: string;
        error?: string;
    }>;
    updateProblem(prob: number, user_id: number, code: string, subsuc: boolean, mar: number): Promise<any>;
}
