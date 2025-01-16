import { Module } from '@nestjs/common';
import { FlowChartController } from './flowChart.controller';
import { FlowChartService } from './flowChart.service';
import { geminiService } from 'src/gemini.service';

@Module({
  imports: [],
  controllers: [FlowChartController],
  providers: [FlowChartService, geminiService],
})
export class FlowChartModule {}
