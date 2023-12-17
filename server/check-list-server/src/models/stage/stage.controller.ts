import {Body, Controller, Get, Param, Post, Res, UsePipes, ValidationPipe} from '@nestjs/common';
import {Response} from "express";
import {StageService} from "./stage.service";
import {StageDto} from "../../dto/stage.dto";

@Controller('users/:userId/passage/:passageId/stage')
export class StageController {

    constructor(private readonly stageService: StageService) {
    }
    @Get()
    async getAllByPassageId(@Param('userId') userId: number, @Param('passageId') passageId: number,
                            @Res() res: Response) {
        const data = await this.stageService
            .getAllByPassageIdAndUserId(userId, passageId);
        res.json({data: data});
    }

    @Get(':id')
    async getOneByPassageIdAndUserId(@Param('userId') userId: number, @Param('passageId') passageId: number,
                            @Param('id') id: number, @Res() res: Response) {
        const data = await this.stageService
            .getOneByPassageIdAndUserId(userId, passageId, id);
        res.json({data: data})
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() stage: StageDto, @Res() res: Response) {
        const newStage = await this.stageService
            .create(stage);
        res.json({stage: newStage});
    }
}
