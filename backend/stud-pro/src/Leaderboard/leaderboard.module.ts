import { Module } from '@nestjs/common';
import { LeaderboardController } from './leaderboard.controller';
import { LeaderBoardService } from './leaderboard.service';
import { SupabaseService } from 'src/supabase.service';

@Module({
  imports: [],
  controllers: [LeaderboardController],
  providers: [LeaderBoardService, SupabaseService],
})
export class LeaderboardModule {}
