import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly DashboardService;
    constructor(DashboardService: DashboardService);
    getDashboardCharts(req: any): Promise<any>;
    getMonthlySolvedProblems(req: any): Promise<any>;
    getAuthoredProblems(req: any): Promise<any>;
    getAllProblems(query: any, res: any): Promise<void>;
}
