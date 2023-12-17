"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const user_service_1 = require("../user/user.service");
const passage_service_1 = require("../passage/passage.service");
let StageService = class StageService {
    constructor(prisma, userService, passageService) {
        this.prisma = prisma;
        this.userService = userService;
        this.passageService = passageService;
    }
    async getAllByPassageIdAndUserId(userId, passageId) {
        const data = {
            stages: null,
            error: ''
        };
        const user = await this.userService.getOne(userId);
        if (!user) {
            data.error = 'User does not exist';
        }
        const passage = await this.passageService
            .getOneByUserId(userId, passageId);
        if (!passage) {
            data.error = 'Passage does not exist on current user';
        }
        const stages = await this.prisma.stage.findMany({
            where: {
                passageId: +passageId
            }
        });
        if (!stages) {
            data.error = 'Stages does not exist on current passage and current user';
        }
        data.stages = this.sortStages(stages);
        return data;
    }
    async sortStages(stages) {
        const stagesWithoutChildren = await this.prisma.stage.findMany({
            where: {
                parentId: null
            }
        });
        const sortedStages = stagesWithoutChildren.map((stageWithoutChildren) => {
            const childrenStages = stages.filter((stage) => stage.parentId === stageWithoutChildren.id);
            const sortedChildren = this.sortChildren(childrenStages, stages);
            return {
                name: stageWithoutChildren.name,
                status: stageWithoutChildren.status,
                children: sortedChildren
            };
        });
        return sortedStages;
    }
    sortChildren(children, allStages) {
        return children.map((childStage) => {
            const nestedChildren = allStages.filter((nestedChildStage) => nestedChildStage.parentId === childStage.id);
            const sortedNestedChildren = this.sortChildren(nestedChildren, allStages);
            return {
                name: childStage.name,
                status: childStage.status,
                children: sortedNestedChildren
            };
        });
    }
    async create(stage) {
        return this.prisma.stage.create({ data: stage });
    }
    async getOneByPassageIdAndUserId(userId, passageId, id) {
        const data = {
            stage: null,
            error: ''
        };
        const user = await this.userService.getOne(userId);
        if (!user) {
            data.error = 'User does not exist';
        }
        const passage = await this.passageService
            .getOneByUserId(userId, passageId);
        if (!passage) {
            data.error = 'Passage does not exist on current user';
        }
        const stage = await this.prisma.stage.findUnique({
            where: {
                id: +id,
                passageId: +passageId
            }
        });
        if (!stage) {
            data.error = 'Stage does not exist on current passage and current user';
        }
        data.stage = stage;
        return data;
    }
    async update(id, stage) {
        const existStage = await this.prisma.stage
            .findUnique({
            where: {
                id: +id
            }
        });
        if (!existStage)
            return;
        return this.prisma.stage.update({
            where: {
                id: +id
            },
            data: {
                name: stage.name,
                status: stage.status,
                parentId: stage.parentId,
            }
        });
    }
};
exports.StageService = StageService;
exports.StageService = StageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, user_service_1.UserService,
        passage_service_1.PassageService])
], StageService);
//# sourceMappingURL=stage.service.js.map