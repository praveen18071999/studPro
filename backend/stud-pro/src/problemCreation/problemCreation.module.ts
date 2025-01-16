import { Module } from '@nestjs/common';
import { ProblemCreationController } from './problemCreation.controller';
import { ProblemCreationService } from './problemCreation.service';
import { extractProblemService } from 'src/extractProblem/extractProblem.service';
import { geminiService } from 'src/gemini.service';
import { SupabaseService } from 'src/supabase.service';

@Module({
  imports: [],
  controllers: [ProblemCreationController],
  providers: [
    ProblemCreationService,
    extractProblemService,
    geminiService,
    SupabaseService,
  ],
})
export class ProblemCreationModule {}
