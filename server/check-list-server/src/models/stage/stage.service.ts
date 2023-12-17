import {Injectable} from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {StageDto} from "../../dto/stage.dto";
import {UserService} from "../user/user.service";
import {PassageService} from "../passage/passage.service";


interface IStage {
    id: number,
    name: string;
    status?: string;
    parentId?: number;
    passageId: number;
}
interface IStageWithChildren {
    name: string,
    status: string,
    children?: IStageWithChildren[];
}
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

        data.stages = this.sortStages(stages);

        return data;
    }

    async sortStages(stages: IStage[]) {
        const stagesWithoutChildren = await this.prisma.stage.findMany({
            where: {
                parentId: null
            }
        });

        const sortedStages: IStageWithChildren[] = stagesWithoutChildren.map((stageWithoutChildren) => {
            const childrenStages = stages.filter((stage) => stage.parentId === stageWithoutChildren.id);
            const sortedChildren: IStageWithChildren[] = this.sortChildren(childrenStages, stages);

            return {
                name: stageWithoutChildren.name,
                status: stageWithoutChildren.status,
                children: sortedChildren
            };
        });

        return sortedStages;
    }

    sortChildren(children: IStage[], allStages: IStage[]): IStageWithChildren[] {
        return children.map((childStage) => {
            const nestedChildren = allStages.filter((nestedChildStage) => nestedChildStage.parentId === childStage.id);
            const sortedNestedChildren: IStageWithChildren[] = this.sortChildren(nestedChildren, allStages);

            return {
                name: childStage.name,
                status: childStage.status,
                children: sortedNestedChildren
            };
        });
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
                parentId: stage.parentId,
            }
        })
    }
}
