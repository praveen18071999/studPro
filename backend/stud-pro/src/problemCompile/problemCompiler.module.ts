import { Module } from '@nestjs/common';
import { ProblemCompilerController } from './problemCompiler.controller';
import { ProblemCompilerService } from './problemCompiler.service';
import { geminiService } from 'src/gemini.service';
import { SupabaseService } from 'src/supabase.service';
@Module({
  imports: [],
  controllers: [ProblemCompilerController],
  providers: [ProblemCompilerService, geminiService, SupabaseService],
})
export class ProblemCompilerModule {}
