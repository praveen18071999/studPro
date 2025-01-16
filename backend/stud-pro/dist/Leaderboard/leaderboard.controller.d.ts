import { LeaderBoardService } from './leaderboard.service';
export declare class LeaderboardController {
    private readonly LeaderBoardService;
    constructor(LeaderBoardService: LeaderBoardService);
    getLeaderBoard(query: any): Promise<any>;
}
