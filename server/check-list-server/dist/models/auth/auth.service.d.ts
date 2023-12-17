import { PrismaService } from 'src/prisma.service';
import { UserDto } from "../../dto/user.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private prisma;
    private readonly jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    private readonly SECRET_KEY;
    validateUser(user: UserDto): Promise<{
        id: number;
        login: string;
        password: string;
    }>;
    isValidatePassword(password: string): boolean;
    create(user: UserDto): Promise<{
        id: number;
        login: string;
        password: string;
    }>;
    createToken(user: UserDto): string;
}
