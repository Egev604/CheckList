import { PrismaService } from 'src/prisma.service';
import { UserDto } from "../../dto/user.dto";
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: number;
        login: string;
        password: string;
    }[]>;
    create(user: UserDto): Promise<{
        id: number;
        login: string;
        password: string;
    }>;
    update(id: string): Promise<{
        id: number;
        login: string;
        password: string;
    }>;
}
