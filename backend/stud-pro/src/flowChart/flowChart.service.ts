import { Injectable } from '@nestjs/common';
import { geminiService } from 'src/gemini.service';

@Injectable()
export class FlowChartService {
  constructor(private readonly GeminiService: geminiService) {}
  async flowChartCode(code: string) {
    const prompt = `Convert the code to JavaScript and only give me the code with no Explanation. code:${code}`;
    const response = await this.GeminiService.geminiPrompt(prompt);
    return { success: true, actualOutput: response.actualOutput };
  }
}
