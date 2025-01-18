import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { JwtAuthGuard } from 'src/jwt-auth.gaurd';

@Controller('dashboard')
@UseGuards(JwtAuthGuard)
export class DashboardController {
  constructor(private readonly DashboardService: DashboardService) {}
  @Get('getProblemLevelDashboardCharts')
  async getDashboardCharts(@Req() req) {
    //console.log(req.user);
    return await this.DashboardService.getProblemDashboardCharts(req.user.id);
  }

  @Get('getMonthlySolvedProblems')
  async getMonthlySolvedProblems(@Req() req) {
    return await this.DashboardService.getMonthlySolvedProblems(req.user.id);
  }
  @Get('authoredProblems')
  async getAuthoredProblems(@Req() req) {
    return await this.DashboardService.getAuthoredProblems(req.user.id);
  }
  @Get('allproblems')
  async getAllProblems(@Query() query: any, @Res() res) {
    let { page, title, level, marks, author } = query;
    title = title || null;
    level = level || null;
    marks = marks || null;
    author = author || null;
    const response = await this.DashboardService.getAllProblems(
      page,
      title,
      level,
      marks,
      author,
    );
    res.json(response);
  }
}
