import { PrismaService } from "../../prisma.service";
import { PassageDto } from "../../dto/passage.dto";
import { UserService } from "../user/user.service";
export declare class PassageService {
    private readonly prisma;
    private readonly userService;
    constructor(prisma: PrismaService, userService: UserService);
    getAllByUserId(userId: number): Promise<{
        passages: any;
        error: string;
    }>;
    create(passage: PassageDto): Promise<{
        id: number;
        userId: number;
        modelDevice: string;
        versionOs: string;
    }>;
    getOneByUserId(userId: number, id: number): Promise<{
        passage: any;
        error: string;
    }>;
}
