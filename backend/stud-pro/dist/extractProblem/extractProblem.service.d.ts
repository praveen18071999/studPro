import { geminiService } from 'src/gemini.service';
import { SupabaseService } from 'src/supabase.service';
export declare class extractProblemService {
    private readonly GeminiService;
    private readonly SupabaseService;
    constructor(GeminiService: geminiService, SupabaseService: SupabaseService);
    extractLink(link: string): Promise<{
        success: boolean;
        actualOutput: string;
    }>;
    extractedFile(file: string): Promise<{
        success: boolean;
        actualOutput: string;
    }>;
    extractProblem(data: number): Promise<{
        success: boolean;
        data: any;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        data?: undefined;
    }>;
}
