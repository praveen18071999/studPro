import { UserService } from './user.service';
export declare class UsersController {
    private readonly userServive;
    constructor(userServive: UserService);
    updateUser(req: any, res: any): Promise<void>;
    getUser(req: any, res: any): Promise<void>;
}
