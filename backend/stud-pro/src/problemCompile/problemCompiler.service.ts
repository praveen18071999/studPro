/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';
import * as path from 'path';
import { exec as childProcessExec } from 'child_process';
import { geminiService } from 'src/gemini.service';
import { SupabaseService } from 'src/supabase.service';
@Injectable()
export class ProblemCompilerService {
  constructor(
    private readonly GeminService: geminiService,
    private readonly supabaseService: SupabaseService,
  ) {}
  async compile(
    language: string,
    code: string,
    input: string,
    expectedOutput: string,
  ): Promise<{ success: boolean; actualOutput: string; error?: string }> {
    const tempDir = path.join(__dirname, 'temp');
    const codeFile = path.join(
      tempDir,
      `program.${getFileExtension(language)}`,
    );
    const inputFile = path.join(tempDir, 'input.txt');
    const outputFile = path.join(tempDir, 'output.txt');

    try {
      await fs.ensureDir(tempDir);

      await fs.writeFile(codeFile, code);
      await fs.writeFile(inputFile, input);
      const command = getCommand(
        language,
        codeFile,
        inputFile,
        outputFile,
        tempDir,
      );
      await runCommand(command);

      const actualOutput = await fs.readFile(outputFile, 'utf-8');

      const success = actualOutput.trim() === expectedOutput.trim();
      return { success, actualOutput };
    } catch (error) {
      return { success: false, actualOutput: '', error: error.message };
    } finally {
      await fs.remove(tempDir);
      // No need to return anything in the finally block
    }
  }

  async changeProgram(
    language: string,
    code: string,
  ): Promise<{ success: boolean; actualOutput: string; error?: string }> {
    //console.log(language);
    const prompt = `Covert the following code to ${language}. Just provide me the converted code and no need of Explanation\n${code}`;
    const response = await this.GeminService.geminiPrompt(prompt);
    //console.log(response);
    return { success: true, actualOutput: response.actualOutput };
  }

  async updateProblem(
    prob: number,
    user_id: number,
    code: string,
    subsuc: boolean,
    mar: number,
  ) {
    const {data,error} = await this.supabaseService
      .getClient()
      .rpc('updateorcreaterowinproblemtable', {
        code,
        mar,
        prob,
        subsuc,
        user_id,
      });
      console.log(data,error);
    return data;
  }
}

function getFileExtension(language: string): string {
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

function getCommand(
  language: string,
  codeFile: string,
  inputFile: string,
  outputFile: string,
  tempDir: string,
): string {
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

function runCommand(command: string): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Failed to execute command: ${command}\n${stderr}`));
      } else {
        resolve();
      }
    });
  });
}
function exec(
  command: string,
  callback: (error: any, stdout: any, stderr: any) => void,
) {
  childProcessExec(command, (error, stdout, stderr) => {
    callback(error, stdout, stderr);
  });
}
