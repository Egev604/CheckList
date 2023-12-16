import { PrismaService } from 'src/prisma.service';
import { UserDto } from "../../dto/user.dto";
export declare class AuthService {
    private prisma;
    constructor(prisma: PrismaService);
    validateUser(user: UserDto): Promise<boolean>;
    create(user: UserDto): Promise<{
        id: number;
        login: string;
        password: string;
    }>;
}
