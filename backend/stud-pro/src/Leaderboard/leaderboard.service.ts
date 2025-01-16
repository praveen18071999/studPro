import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from 'src/supabase.service';

@Injectable()
export class LeaderBoardService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async getLeaderBoard(pages: number, username: string) {
    const { data, error } = await this.supabaseService
      .getClient()
      .rpc('leaderboardquery', {
        pages,
        username,
      });
    if (error) {
      throw new InternalServerErrorException('Failed to get leaderboard');
    }
    return data;
  }
}
