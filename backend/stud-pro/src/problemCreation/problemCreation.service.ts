import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { extractProblemService } from 'src/extractProblem/extractProblem.service';
import { Multer } from 'multer';
import * as pdfParse from 'pdf-parse';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class ProblemCreationService {
  constructor(
    private readonly ExtractProblemService: extractProblemService,
    private readonly supabaseService: SupabaseService,
  ) {}

  async createProblem(
    link: string,
    title: string,
    baseTestCasesInput: string[],
    baseTestCasesOutput: string[],
    baseTestCasesExplanation: string[],
    actualInput: string[],
    actualOutput: string[],
    problemLevel: string,
    problemMarks: number,
  ) {
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
    } catch (error) {
      console.error('Error creating problem:', error);
      throw new InternalServerErrorException('Failed to create problem');
    }
  }

  async readFile(
    file: Multer.File,
    title: string,
    baseTestCasesInput: string[],
    baseTestCasesOutput: string[],
    baseTestCasesExplanation: string[],
    actualInput: string[],
    actualOutput: string[],
    problemLevel: string,
    problemMarks: number,
  ) {
    try {
      const fileBuffer = file.buffer;

      let extractedData: string;

      if (file.mimetype === 'application/json') {
        extractedData = JSON.stringify(
          JSON.parse(fileBuffer.toString('utf-8')),
          null,
          2,
        );
      } else if (file.mimetype === 'application/pdf') {
        const pdfData = await pdfParse(fileBuffer);
        extractedData = pdfData.text;
      } else {
        extractedData = fileBuffer.toString('utf-8');
      }

      const response =
        await this.ExtractProblemService.extractedFile(extractedData);

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
    } catch (error) {
      console.error('Error reading file:', error);
      throw new InternalServerErrorException('Failed to read file');
    }
  }
}
