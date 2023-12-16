import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma.service";;
import {StageDto} from "../../dto/stage.dto";

@Injectable()
export class StageService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll() {
        return this.prisma.stage.findMany();
    }

    async create(stage: StageDto) {
        return this.prisma.passage.create({data: stage});
    }

    async getOne(id: number) {
        return this.prisma.passage.findFirst({
            where: {
                id: id
            }
        })
    }
}
