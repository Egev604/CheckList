import { PrismaService } from "../../prisma.service";
import { StageDto } from "../../dto/stage.dto";
export declare class StageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: number;
        name: string;
        status: string;
        child: number;
    }[]>;
    create(stage: StageDto): Promise<{
        id: number;
        name: string;
        status: string;
        child: number;
    }>;
    getOne(id: number): Promise<{
        id: number;
        name: string;
        status: string;
        child: number;
    }>;
    update(stage: StageDto): Promise<{
        id: number;
        name: string;
        status: string;
        child: number;
    }>;
}
