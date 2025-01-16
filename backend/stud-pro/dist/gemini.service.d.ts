export declare class geminiService {
    geminiPrompt(prompt: any): Promise<{
        success: boolean;
        actualOutput: string;
    }>;
    geminiPromptExtract(prompt: any): Promise<{
        success: boolean;
        actualOutput: string;
    }>;
}
