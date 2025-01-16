import { extractProblemService } from 'src/extractProblem/extractProblem.service';
import { Multer } from 'multer';
import { SupabaseService } from 'src/supabase.service';
export declare class ProblemCreationService {
    private readonly ExtractProblemService;
    private readonly supabaseService;
    constructor(ExtractProblemService: extractProblemService, supabaseService: SupabaseService);
    createProblem(link: string, title: string, baseTestCasesInput: string[], baseTestCasesOutput: string[], baseTestCasesExplanation: string[], actualInput: string[], actualOutput: string[], problemLevel: string, problemMarks: number): Promise<null>;
    readFile(file: Multer.File, title: string, baseTestCasesInput: string[], baseTestCasesOutput: string[], baseTestCasesExplanation: string[], actualInput: string[], actualOutput: string[], problemLevel: string, problemMarks: number): Promise<null>;
}
