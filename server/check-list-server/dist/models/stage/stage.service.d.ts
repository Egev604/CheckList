import { PrismaService } from "../../prisma.service";
import { StageDto } from "../../dto/stage.dto";
import { UserService } from "../user/user.service";
import { PassageService } from "../passage/passage.service";
interface IStage {
    id: number;
    name: string;
    status?: string;
    parentId?: number;
    passageId: number;
}
interface IStageWithChildren {
    name: string;
    status: string;
    children?: IStageWithChildren[];
}
export declare class StageService {
    private readonly prisma;
    private readonly userService;
    private readonly passageService;
    constructor(prisma: PrismaService, userService: UserService, passageService: PassageService);
    getAllByPassageIdAndUserId(userId: number, passageId: number): Promise<{
        stages: any;
        error: string;
    }>;
    sortStages(stages: IStage[]): Promise<IStageWithChildren[]>;
    sortChildren(children: IStage[], allStages: IStage[]): IStageWithChildren[];
    create(stage: StageDto): Promise<{
        id: number;
        name: string;
        status: string;
        parentId: number;
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
        parentId: number;
        passageId: number;
    }>;
}
export {};
