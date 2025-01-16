import { ProblemCreationService } from './problemCreation.service';
import { Multer } from 'multer';
export declare class ProblemCreationController {
    private readonly ProblemCreationService;
    constructor(ProblemCreationService: ProblemCreationService);
    createProblem(req: any, res: any): Promise<void>;
    uploadFile(file: Multer.File, req: any, res: any): Promise<void>;
}
