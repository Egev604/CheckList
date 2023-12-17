import { PassageService } from "./passage.service";
import { PassageDto } from "../../dto/passage.dto";
import { Response } from 'express';
export declare class PassageController {
    private readonly passageService;
    constructor(passageService: PassageService);
    getAllByUserId(userId: number, res: Response): Promise<void>;
    getOneByUserId(userId: number, id: number, res: Response): Promise<void>;
    create(passage: PassageDto, res: Response): Promise<void>;
}
