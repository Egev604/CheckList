import { PrismaService } from "../../prisma.service";
import { StageDto } from "../../dto/stage.dto";
export declare class StageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllByPassageId(id: number): Promise<{
        id: number;
        name: string;
        status: string;
        child: number;
        passageId: number;
    }[]>;
    create(stage: StageDto): Promise<{
        id: number;
        name: string;
        status: string;
        child: number;
        passageId: number;
    }>;
    getOne(id: number): Promise<{
        id: number;
        name: string;
        status: string;
        child: number;
        passageId: number;
    }>;
    update(stage: StageDto): Promise<{
        id: number;
        name: string;
        status: string;
        child: number;
        passageId: number;
    }>;
}
