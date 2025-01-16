import { Controller, Request, Post, Res, UseGuards } from '@nestjs/common';
import { FlowChartService } from './flowChart.service';
import { JwtAuthGuard } from 'src/jwt-auth.gaurd';

@Controller('flowChart')
@UseGuards(JwtAuthGuard)
export class FlowChartController {
  constructor(private readonly FlowChartService: FlowChartService) {}

  @Post('convertToflowchart')
  async flowchart(@Request() req, @Res() res) {
    const response = await this.FlowChartService.flowChartCode(req.body.code);
    res.json(response);
  }
}
