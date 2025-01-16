import { Controller, Get, Param, Res, UseGuards } from '@nestjs/common';
import { extractProblemService } from './extractProblem.service';
import { JwtAuthGuard } from 'src/jwt-auth.gaurd';

@Controller('extractProblem')
@UseGuards(JwtAuthGuard)
export class ExtractProblemController {
  constructor(private readonly ExtractProblemService: extractProblemService) {}
  @Get('problemData/:id')
  async extractProblem(@Param('id') id: number, @Res() res) {
    const response = await this.ExtractProblemService.extractProblem(id);
    res.json(response);
  }
}
