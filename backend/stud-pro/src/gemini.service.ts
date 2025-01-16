import { Injectable } from '@nestjs/common';

import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class geminiService {
  async geminiPrompt(prompt) {
    const genAI = new GoogleGenerativeAI(
      'AIzaSyB80VB_BRkozLg_dSmsVjGjfRXvqlGDdtg',
    );
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    //console.log(result.response.text());
    const trimString = removeFirstLineAndLastLine(
      result.response.text().trim(),
    );
    console.log(trimString);
    return { success: true, actualOutput: trimString };
  }

  async geminiPromptExtract(prompt) {
    const genAI = new GoogleGenerativeAI(
      'AIzaSyB80VB_BRkozLg_dSmsVjGjfRXvqlGDdtg',
    );
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent(prompt);
    //console.log(result.response.text());
    //const trimString = removeFirstLineAndLastLine(result.response.text().trim());
    //console.log(trimString);
    return { success: true, actualOutput: result.response.text() };
  }
}

function removeFirstLineAndLastLine(str: string): string {
  return str.split('\n').slice(1, -1).join('\n');
}
