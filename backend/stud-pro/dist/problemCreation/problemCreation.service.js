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
exports.ProblemCreationService = void 0;
const common_1 = require("@nestjs/common");
const extractProblem_service_1 = require("../extractProblem/extractProblem.service");
const pdfParse = require("pdf-parse");
const supabase_service_1 = require("../supabase.service");
let ProblemCreationService = class ProblemCreationService {
    constructor(ExtractProblemService, supabaseService) {
        this.ExtractProblemService = ExtractProblemService;
        this.supabaseService = supabaseService;
    }
    async createProblem(link, title, baseTestCasesInput, baseTestCasesOutput, baseTestCasesExplanation, actualInput, actualOutput, problemLevel, problemMarks) {
        try {
            const t = await this.ExtractProblemService.extractLink(link);
            const problemData = {
                problemDescription: t.actualOutput,
                problemCode: '',
                problemLevel: problemLevel,
                problemTitle: title,
                baseTestCasesInput: baseTestCasesInput,
                baseTestCasesOutput: baseTestCasesOutput,
                baseTestCasesExplanation: baseTestCasesExplanation,
                marks: problemMarks,
                actualInput: actualInput,
                actualOutput: actualOutput,
            };
            const { data, error } = await this.supabaseService
                .getClient()
                .from('problem')
                .insert([problemData]);
            if (error) {
                throw new Error(error.message);
            }
            return data;
        }
        catch (error) {
            console.error('Error creating problem:', error);
            throw new common_1.InternalServerErrorException('Failed to create problem');
        }
    }
    async readFile(file, title, baseTestCasesInput, baseTestCasesOutput, baseTestCasesExplanation, actualInput, actualOutput, problemLevel, problemMarks) {
        try {
            const fileBuffer = file.buffer;
            let extractedData;
            if (file.mimetype === 'application/json') {
                extractedData = JSON.stringify(JSON.parse(fileBuffer.toString('utf-8')), null, 2);
            }
            else if (file.mimetype === 'application/pdf') {
                const pdfData = await pdfParse(fileBuffer);
                extractedData = pdfData.text;
            }
            else {
                extractedData = fileBuffer.toString('utf-8');
            }
            const response = await this.ExtractProblemService.extractedFile(extractedData);
            const problemData = {
                problemDescription: response.actualOutput,
                problemCode: '',
                problemLevel: problemLevel,
                problemTitle: title,
                baseTestCasesInput: baseTestCasesInput,
                baseTestCasesOutput: baseTestCasesOutput,
                baseTestCasesExplanation: baseTestCasesExplanation,
                marks: problemMarks,
                actualInput: actualInput,
                actualOutput: actualOutput,
            };
            const { data, error } = await this.supabaseService
                .getClient()
                .from('problem')
                .insert([problemData]);
            if (error) {
                throw new Error(error.message);
            }
            return data;
        }
        catch (error) {
            console.error('Error reading file:', error);
            throw new common_1.InternalServerErrorException('Failed to read file');
        }
    }
};
exports.ProblemCreationService = ProblemCreationService;
exports.ProblemCreationService = ProblemCreationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [extractProblem_service_1.extractProblemService,
        supabase_service_1.SupabaseService])
], ProblemCreationService);
//# sourceMappingURL=problemCreation.service.js.map