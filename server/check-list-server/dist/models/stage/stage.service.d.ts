import { PrismaService } from "../../prisma.service";
import { StageDto } from "../../dto/stage.dto";
import { UserService } from "../user/user.service";
import { PassageService } from "../passage/passage.service";
export declare class StageService {
    private readonly prisma;
    private readonly userService;
    private readonly passageService;
    constructor(prisma: PrismaService, userService: UserService, passageService: PassageService);
    getAllByPassageIdAndUserId(userId: number, passageId: number): Promise<{
        stages: any;
        error: string;
    }>;
    create(stage: StageDto): Promise<{
        id: number;
        name: string;
        status: string;
        child: number;
        passageId: number;
    }>;
    getOneByPassageIdAndUserId(userId: number, passageId: number, id: number): Promise<{
        stage: any;
        error: string;
    }>;
    update(id: number, stage: StageDto): Promise<{
        id: number;
        name: string;
        status: string;
        child: number;
        passageId: number;
    }>;
}
