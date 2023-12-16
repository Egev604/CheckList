import { AuthService } from './auth.service';
import { UserDto } from "../../dto/user.dto";
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    private readonly jwtService;
    constructor(authService: AuthService, jwtService: JwtService);
    login(user: UserDto, res: Response): Promise<void>;
}
