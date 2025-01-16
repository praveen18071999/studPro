import { FlowChartService } from './flowChart.service';
export declare class FlowChartController {
    private readonly FlowChartService;
    constructor(FlowChartService: FlowChartService);
    flowchart(req: any, res: any): Promise<void>;
}
