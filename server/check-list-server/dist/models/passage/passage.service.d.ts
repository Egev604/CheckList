import { PrismaService } from "../../prisma.service";
import { PassageDto } from "../../dto/passage.dto";
export declare class PassageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<{
        id: number;
        userId: number;
        modelDevice: string;
        versionOs: string;
        stageId: number;
    }[]>;
    create(passage: PassageDto): Promise<{
        id: number;
        userId: number;
        modelDevice: string;
        versionOs: string;
        stageId: number;
    }>;
    getOne(id: number): Promise<{
        id: number;
        userId: number;
        modelDevice: string;
        versionOs: string;
        stageId: number;
    }>;
}
