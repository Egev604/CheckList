import {Injectable, Res} from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {Response} from "express";
import {PassageDto} from "../../dto/passage.dto";

@Injectable()
export class PassageService {
    constructor(private readonly prisma: PrismaService) {}

    async getAll() {
        return this.prisma.passage.findMany();
    }

    async create(passage: PassageDto) {
        return this.prisma.passage.create({data: passage});
    }

    async getOne(id: number) {
        return this.prisma.passage.findFirst({
            where: {
                id: id
            }
        })
    }
}
