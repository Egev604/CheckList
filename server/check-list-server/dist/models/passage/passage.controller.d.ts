import { PassageService } from "./passage.service";
import { PassageDto } from "../../dto/passage.dto";
import { Response } from 'express';
export declare class PassageController {
    private readonly passageService;
    constructor(passageService: PassageService);
    getAll(res: Response): Promise<void>;
    getOne(id: number, res: Response): Promise<void>;
    create(passage: PassageDto, res: Response): Promise<void>;
}
