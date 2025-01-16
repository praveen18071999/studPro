import { AuthenticationService } from './authentication.service';
export declare class AuthenticationController {
    private readonly authenticationService;
    constructor(authenticationService: AuthenticationService);
    login(req: any, res: any): Promise<any>;
    register(req: any, res: any): Promise<any>;
}
