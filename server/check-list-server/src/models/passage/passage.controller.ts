import {Body, Controller, Get, Param, Post, Res, UsePipes, ValidationPipe} from '@nestjs/common';
import {PassageService} from "./passage.service";
import {PassageDto} from "../../dto/passage.dto";
import { Response} from 'express';

@Controller('passage')
export class PassageController {
    constructor(private readonly passageService: PassageService) {}

    @Get()
    async getAll(@Res() res: Response) {
        const passages = await this.passageService.getAll();
        res.json({passages: passages});
    }

    @Get(':id')
    async getOne(@Param('id') id: number, @Res() res: Response) {
        const foundPassage = await this.passageService.getOne(id);
        res.json({passage: foundPassage})
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() passage: PassageDto, @Res() res: Response) {
        const newPassage = await this.passageService.create(passage);
        res.json({newPassage: newPassage});
    }
}
