import {Injectable} from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {StageDto} from "../../dto/stage.dto";
import {UserService} from "../user/user.service";
import {PassageService} from "../passage/passage.service";

@Injectable()
export class StageService {
    constructor(private readonly prisma: PrismaService, private readonly userService: UserService,
                private readonly passageService: PassageService) {
    }

    async getAllByPassageIdAndUserId(userId: number, passageId: number) {

        const data = {
            stages: null,
            error: ''
        };
        const user = await this.userService.getOne(userId);

        if (!user) {
            data.error = 'User does not exist'
        }

        const passage = await this.passageService
            .getOneByUserId(userId, passageId);

        if (!passage) {
            data.error = 'Passage does not exist on current user'
        }

        const stages = await this.prisma.stage.findMany({
            where: {
                passageId: +passageId
            }
        })

        if (!stages) {
            data.error = 'Stages does not exist on current passage and current user'
        }

        data.stages = stages;

        return data;
    }

    async create(stage: StageDto) {
        return this.prisma.stage.create({data: stage});
    }

    async getOneByPassageIdAndUserId(userId: number, passageId: number, id: number) {

        const data = {
            stage: null,
            error: ''
        };
        const user = await this.userService.getOne(userId);

        if (!user) {
            data.error = 'User does not exist'
        }

        const passage = await this.passageService
            .getOneByUserId(userId, passageId);

        if (!passage) {
            data.error = 'Passage does not exist on current user'
        }

        const stage = await this.prisma.stage.findUnique({
            where: {
                id: +id,
                passageId: +passageId
            }
        })

        if (!stage) {
            data.error = 'Stage does not exist on current passage and current user'
        }

        data.stage = stage;

        return data;
    }

    async update(id: number, stage: StageDto) {
        const existStage = await this.prisma.stage
            .findUnique({
                where: {
                    id: +id
                }
            })

        if (!existStage) return;

        return this.prisma.stage.update({
            where: {
                id: +id
            },
            data: {
                name: stage.name,
                status: stage.status,
                child: stage.child,
            }
        })
    }
}
