import { geminiService } from 'src/gemini.service';
export declare class FlowChartService {
    private readonly GeminiService;
    constructor(GeminiService: geminiService);
    flowChartCode(code: string): Promise<{
        success: boolean;
        actualOutput: string;
    }>;
}
