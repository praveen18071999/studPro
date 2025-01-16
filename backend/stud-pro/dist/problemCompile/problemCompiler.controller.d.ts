import { ProblemCompilerService } from "./problemCompiler.service";
export declare class ProblemCompilerController {
    private readonly problemCompilerService;
    constructor(problemCompilerService: ProblemCompilerService);
    compile(req: any, res: any): Promise<void>;
    submit(req: any, res: any): Promise<void>;
    changeProgram(req: any, res: any): Promise<void>;
}
