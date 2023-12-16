import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma.service";;
import {StageDto} from "../../dto/stage.dto";
import {PassageDto} from "../../dto/passage.dto";

@Injectable()
export class StageService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll() {
        return this.prisma.stage.findMany();
    }

    async create(stage: StageDto) {
        return this.prisma.stage.create({data: stage});
    }

    async getOne(id: number) {
        return this.prisma.stage.findFirst({
            where: {
                id: id
            }
        })
    }

    async update(stage: StageDto) {
        const existStage = await this.prisma.stage
            .findUnique({
                where: {
                    id: stage.id
                }
            })

        if (!existStage) return;

        return this.prisma.stage.update({
            where: {
                id: stage.id
            },
            data: {

            }
        })
    }
}
