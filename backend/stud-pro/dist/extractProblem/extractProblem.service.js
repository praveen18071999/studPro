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
exports.extractProblemService = void 0;
const common_1 = require("@nestjs/common");
const puppeteer_1 = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const gemini_service_1 = require("../gemini.service");
const supabase_service_1 = require("../supabase.service");
let extractProblemService = class extractProblemService {
    constructor(GeminiService, SupabaseService) {
        this.GeminiService = GeminiService;
        this.SupabaseService = SupabaseService;
    }
    async extractLink(link) {
        try {
            const browser = await puppeteer_1.default.launch();
            const page = await browser.newPage();
            await page.goto(link, { waitUntil: 'networkidle2' });
            const pageHTML = await page.content();
            await browser.close();
            fs.writeFileSync('page.html', pageHTML);
            const $ = cheerio.load(pageHTML);
            let prompt;
            if (link.includes('spoj')) {
                const problemStatement = $('#problem-body').text().trim();
                const inputFormat = $('h3:contains("Input")').next('p').text().trim();
                const outputFormat = $('h3:contains("Output")').next('p').text().trim();
                const constraints = $('h3:contains("Example")').next('p').text().trim();
                prompt = `Format the following problem statement with constraints and exclude sample input and output.\n${problemStatement}\nInput Format\n${inputFormat}\nOutput Format\n${outputFormat}\nConstraints\n${constraints}`;
            }
            else if (link.includes('codechef')) {
                const problemStatement = $('#problem-statement > p').text().trim();
                const inputFormat = $('h3:contains("Input Format")')
                    .next('ul')
                    .text()
                    .trim();
                const outputFormat = $('h3:contains("Output Format")')
                    .next('p')
                    .text()
                    .trim();
                const constraints = $('h3:contains("Constraints")')
                    .next('div')
                    .text()
                    .trim();
                prompt = `Format the following problem statement with constraints and exclude sample input and output.\n${problemStatement}\nInput Format\n${inputFormat}\nOutput Format\n${outputFormat}\nConstraints\n${constraints}`;
            }
            else {
                throw new Error('Unsupported link format');
            }
            return await this.GeminiService.geminiPromptExtract(prompt);
        }
        catch (error) {
            console.error('Error extracting link:', error);
            throw new common_1.InternalServerErrorException('Failed to extract link');
        }
    }
    async extractedFile(file) {
        try {
            const prompt = `Extract the problem statement from the file and provide the formatted problem statement with constraints and exclude sample input and output and Title. file:${file}`;
            return await this.GeminiService.geminiPromptExtract(prompt);
        }
        catch (error) {
            console.error('Error extracting file:', error);
            throw new common_1.InternalServerErrorException('Failed to extract file');
        }
    }
    async extractProblem(data) {
        try {
            console.log(data);
            const response = await this.SupabaseService.getClient().rpc('getproblemdata', { problem_id: data });
            console.log(response);
            if (response.error) {
                throw new Error(response.error.message);
            }
            console.log(response);
            return { success: true, data: response.data };
        }
        catch (error) {
            console.error('Error extracting problem:', error);
            return { success: false, error: error.message };
        }
    }
};
exports.extractProblemService = extractProblemService;
exports.extractProblemService = extractProblemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gemini_service_1.geminiService,
        supabase_service_1.SupabaseService])
], extractProblemService);
//# sourceMappingURL=extractProblem.service.js.map