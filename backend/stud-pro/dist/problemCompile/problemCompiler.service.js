"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemCompilerService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs-extra");
const path = require("path");
const child_process_1 = require("child_process");
const gemini_service_1 = require("../gemini.service");
const supabase_service_1 = require("../supabase.service");
let ProblemCompilerService = class ProblemCompilerService {
    constructor(GeminService, supabaseService) {
        this.GeminService = GeminService;
        this.supabaseService = supabaseService;
    }
    async compile(language, code, input, expectedOutput) {
        const tempDir = path.join(__dirname, 'temp');
        const codeFile = path.join(tempDir, `program.${getFileExtension(language)}`);
        const inputFile = path.join(tempDir, 'input.txt');
        const outputFile = path.join(tempDir, 'output.txt');
        try {
            await fs.ensureDir(tempDir);
            await fs.writeFile(codeFile, code);
            await fs.writeFile(inputFile, input);
            const command = getCommand(language, codeFile, inputFile, outputFile, tempDir);
            await runCommand(command);
            const actualOutput = await fs.readFile(outputFile, 'utf-8');
            const success = actualOutput.trim() === expectedOutput.trim();
            return { success, actualOutput };
        }
        catch (error) {
            return { success: false, actualOutput: '', error: error.message };
        }
        finally {
            await fs.remove(tempDir);
        }
    }
    async changeProgram(language, code) {
        const prompt = `Covert the following code to ${language}. Just provide me the converted code and no need of Explanation\n${code}`;
        const response = await this.GeminService.geminiPrompt(prompt);
        return { success: true, actualOutput: response.actualOutput };
    }
    async updateProblem(prob, user_id, code, subsuc, mar) {
        const { data, error } = await this.supabaseService
            .getClient()
            .rpc('updateorcreaterowinproblemtable', {
            code,
            mar,
            prob,
            subsuc,
            user_id,
        });
        console.log(data, error);
        return data;
    }
};
exports.ProblemCompilerService = ProblemCompilerService;
exports.ProblemCompilerService = ProblemCompilerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gemini_service_1.geminiService,
        supabase_service_1.SupabaseService])
], ProblemCompilerService);
function getFileExtension(language) {
    console.log(language);
    switch (language) {
        case 'c':
            return 'c';
        case 'cpp':
            return 'cpp';
        case 'java':
            return 'java';
        case 'python':
            return 'py';
        case 'javascript':
            return 'js';
        default:
            throw new Error(`Unsupported language: ${language}`);
    }
}
function getCommand(language, codeFile, inputFile, outputFile, tempDir) {
    console.log(language);
    switch (language) {
        case 'c':
            return `gcc -o program ${codeFile} && ./program < ${inputFile} > ${outputFile}`;
        case 'cpp':
            return `g++ -o program ${codeFile} && ./program < ${inputFile} > ${outputFile}`;
        case 'java':
            return `javac ${codeFile} && java -cp ${tempDir} Program < ${inputFile} > ${outputFile}`;
        case 'python':
            return `python3 ${codeFile} < ${inputFile} > ${outputFile}`;
        case 'javascript':
            return `node ${codeFile} < ${inputFile} > ${outputFile}`;
        default:
            throw new Error(`Unsupported language: ${language}`);
    }
}
function runCommand(command) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(new Error(`Failed to execute command: ${command}\n${stderr}`));
            }
            else {
                resolve();
            }
        });
    });
}
function exec(command, callback) {
    (0, child_process_1.exec)(command, (error, stdout, stderr) => {
        callback(error, stdout, stderr);
    });
}
//# sourceMappingURL=problemCompiler.service.js.map