import { Module } from '@nestjs/common';
import { ExtractProblemController } from './extractProblem.controller';
import { extractProblemService } from './extractProblem.service';
import { geminiService } from 'src/gemini.service';
import { SupabaseService } from 'src/supabase.service';

@Module({
  imports: [],
  controllers: [ExtractProblemController],
  providers: [extractProblemService, geminiService, SupabaseService],
})
export class ExtractProblemModule {}
