import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { LeaderBoardService } from './leaderboard.service';
import { JwtAuthGuard } from 'src/jwt-auth.gaurd';

@Controller('leaderboard')
@UseGuards(JwtAuthGuard)
export class LeaderboardController {
  constructor(private readonly LeaderBoardService: LeaderBoardService) {}
  @Get('getLeaderBoard')
  async getLeaderBoard(@Query() query: any) {
    let { pages,username } = query;
    username = username || null;
    return await this.LeaderBoardService.getLeaderBoard(pages,username);
  }
}
