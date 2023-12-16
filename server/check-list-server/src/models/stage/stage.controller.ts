import {Body, Controller, Get, Param, Post, Res, UsePipes, ValidationPipe} from '@nestjs/common';
import {Response} from "express";
import {StageService} from "./stage.service";
import {StageDto} from "../../dto/stage.dto";

@Controller('passage/:passageId/stage')
export class StageController {

    constructor(private readonly stageService: StageService) {
    }
    @Get()
    async getAllByPassageId(@Param('passageId') passageId: number,
                            @Res() res: Response) {
        const stages = await this.stageService
            .getAllByPassageId(passageId);
        res.json({stages: stages});
    }

    @Get(':id')
    async getOne(@Param('id') id: number, @Res() res: Response) {
        const foundStage = await this.stageService.getOne(id);
        res.json({stage: foundStage})
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() stage: StageDto, @Res() res: Response) {
        const newStage = await this.stageService.create(stage);
        res.json({stage: newStage});
    }
}
