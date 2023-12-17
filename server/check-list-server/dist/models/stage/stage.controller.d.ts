import { Response } from "express";
import { StageService } from "./stage.service";
import { StageDto } from "../../dto/stage.dto";
export declare class StageController {
    private readonly stageService;
    constructor(stageService: StageService);
    getAllByPassageId(userId: number, passageId: number, res: Response): Promise<void>;
    getOneByPassageIdAndUserId(userId: number, passageId: number, id: number, res: Response): Promise<void>;
    create(stage: StageDto, res: Response): Promise<void>;
}
