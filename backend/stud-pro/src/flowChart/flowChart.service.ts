import { Injectable } from '@nestjs/common';
import { geminiService } from 'src/gemini.service';

@Injectable()
export class FlowChartService {
  constructor(private readonly GeminiService: geminiService) {}
  async flowChartCode(code: string) {
    const prompt = `Convert the following code to JavaScript, specifically for SVG conversion in js2flowchart. Provide only the converted code with no explanations or additional comments. code:${code}`;
    const response = await this.GeminiService.geminiPrompt(prompt);
    return { success: true, actualOutput: response.actualOutput };
  }
}
