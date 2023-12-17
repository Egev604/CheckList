import {Injectable, Res} from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {Response} from "express";
import {PassageDto} from "../../dto/passage.dto";
import {UserService} from "../user/user.service";

@Injectable()
export class PassageService {
    constructor(private readonly prisma: PrismaService, private readonly userService: UserService) {}

    async getAllByUserId(userId: number) {

        const data = {
            passages: null,
            error: ''
        };

        const user = await this.userService.getOne(userId);

        if (!user) {
            data.error = 'User does not exist'
        }

        const passages = await this.prisma.passage.findMany({
            where: {
                userId: +userId
            }
        })

        if (!passages) {
            data.error = 'Passages does not exist on current user'
        }

        data.passages = passages;

        return data;
    }

    async create(passage: PassageDto) {
        return this.prisma.passage.create({data: passage});
    }

    async getOneByUserId(userId: number, id: number) {
        const data = {
            passage: null,
            error: ''
        };

        const user = await this.userService.getOne(userId);

        if (!user) {
            data.error = 'User does not exist'
        }

        const passage = await this.prisma.passage.findUnique({
            where: {
                id: +id,
                userId: +userId
            }
        })

        if (!passage) {
            data.error = 'Passage does not exist on current user'
        }

        data.passage = passage;

        return data;
    }
}
