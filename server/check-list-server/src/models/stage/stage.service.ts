import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma.service";;
import {StageDto} from "../../dto/stage.dto";
import {PassageDto} from "../../dto/passage.dto";

@Injectable()
export class StageService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllByPassageId(passageId: number) {
        return this.prisma.stage.findMany({
            where: {
                passageId: passageId
            }
        });
    }

    async create(stage: StageDto) {
        return this.prisma.stage.create({data: stage});
    }

    async getOneByPassageId(passageId: number, id: number) {
        return this.prisma.stage.findUnique({
            where: {
                passageId: passageId,
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
                name: stage.name,
                status: stage.status,
                child: stage.child,
            }
        })
    }
}
