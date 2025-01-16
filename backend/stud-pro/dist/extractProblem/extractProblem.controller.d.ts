import { extractProblemService } from './extractProblem.service';
export declare class ExtractProblemController {
    private readonly ExtractProblemService;
    constructor(ExtractProblemService: extractProblemService);
    extractProblem(id: number, res: any): Promise<void>;
}
