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
exports.PassageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const user_service_1 = require("../user/user.service");
let PassageService = class PassageService {
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    async getAllByUserId(userId) {
        const data = {
            passages: null,
            error: ''
        };
        const user = await this.userService.getOne(userId);
        if (!user) {
            data.error = 'User does not exist';
        }
        const passages = await this.prisma.passage.findMany({
            where: {
                userId: +userId
            }
        });
        if (!passages) {
            data.error = 'Passages does not exist on current user';
        }
        data.passages = passages;
        return data;
    }
    async create(passage) {
        return this.prisma.passage.create({ data: passage });
    }
    async getOneByUserId(userId, id) {
        const data = {
            passage: null,
            error: ''
        };
        const user = await this.userService.getOne(userId);
        if (!user) {
            data.error = 'User does not exist';
        }
        const passage = await this.prisma.passage.findUnique({
            where: {
                id: +id,
                userId: +userId
            }
        });
        if (!passage) {
            data.error = 'Passage does not exist on current user';
        }
        data.passage = passage;
        return data;
    }
};
exports.PassageService = PassageService;
exports.PassageService = PassageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, user_service_1.UserService])
], PassageService);
//# sourceMappingURL=passage.service.js.map