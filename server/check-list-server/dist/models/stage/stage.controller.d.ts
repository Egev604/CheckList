import { Response } from "express";
import { StageService } from "./stage.service";
import { StageDto } from "../../dto/stage.dto";
export declare class StageController {
    private readonly stageService;
    constructor(stageService: StageService);
    getAll(res: Response): Promise<void>;
    getOne(id: number, res: Response): Promise<void>;
    create(stage: StageDto, res: Response): Promise<void>;
}
