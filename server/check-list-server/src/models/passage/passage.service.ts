import {Injectable, Res} from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {Response} from "express";
import {PassageDto} from "../../dto/passage.dto";

@Injectable()
export class PassageService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllByUserId(userId: number) {
        return this.prisma.passage.findMany({
            where: {
                userId: userId
            }
        });
    }

    async create(passage: PassageDto) {
        return this.prisma.passage.create({data: passage});
    }

    async getOneByUserId(userId: number, id: number) {
        return this.prisma.passage.findUnique({
            where: {
                userId: userId,
                id: id
            }
        })
    }
}
