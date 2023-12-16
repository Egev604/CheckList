import { AuthService } from './auth.service';
import { UserDto } from "../../dto/user.dto";
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: UserDto, res: Response): Promise<void>;
    register(user: UserDto, res: Response): Promise<{
        id: number;
        login: string;
        password: string;
    }>;
}
