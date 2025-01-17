import { Injectable, InternalServerErrorException } from '@nestjs/common';
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import { geminiService } from 'src/gemini.service';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class extractProblemService {
  constructor(
    private readonly GeminiService: geminiService,
    private readonly SupabaseService: SupabaseService,
  ) {}

  async extractLink(link: string) {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(link, { waitUntil: 'networkidle2' });

      const pageHTML = await page.content();
      await browser.close();
      fs.writeFileSync('page.html', pageHTML);

      const $ = cheerio.load(pageHTML);
      let prompt: string;

      if (link.includes('spoj')) {
        const problemStatement = $('#problem-body').text().trim();
        const inputFormat = $('h3:contains("Input")').next('p').text().trim();
        const outputFormat = $('h3:contains("Output")').next('p').text().trim();
        const constraints = $('h3:contains("Example")').next('p').text().trim();
        prompt = `Format the following problem statement with constraints and exclude sample input and output.\n${problemStatement}\nInput Format\n${inputFormat}\nOutput Format\n${outputFormat}\nConstraints\n${constraints}`;
      } else if (link.includes('codechef')) {
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
      } else {
        throw new Error('Unsupported link format');
      }

      return await this.GeminiService.geminiPromptExtract(prompt);
    } catch (error) {
      console.error('Error extracting link:', error);
      throw new InternalServerErrorException('Failed to extract link');
    }
  }

  async extractedFile(file: string) {
    try {
      const prompt = `Extract the problem statement from the file and provide the formatted problem statement with constraints and exclude sample input and output and Title. file:${file}`;
      return await this.GeminiService.geminiPromptExtract(prompt);
    } catch (error) {
      console.error('Error extracting file:', error);
      throw new InternalServerErrorException('Failed to extract file');
    }
  }

  async extractProblem(problem_id: number) {
    try {
      console.log(problem_id);
      const response = await this.SupabaseService.getClient().rpc(
        'getproblemdata',
        { problem_id},
      );
      console.log(response);
      if (response.error) {
        throw new Error(response.error.message);
      }
      console.log(response);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error extracting problem:', error);
      return { success: false, error: error.message };
    }
  }
}
