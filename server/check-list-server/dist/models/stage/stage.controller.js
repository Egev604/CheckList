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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageController = void 0;
const common_1 = require("@nestjs/common");
const stage_service_1 = require("./stage.service");
const stage_dto_1 = require("../../dto/stage.dto");
let StageController = class StageController {
    constructor(stageService) {
        this.stageService = stageService;
    }
    async getAllByPassageId(passageId, res) {
        const stages = await this.stageService
            .getAllByPassageId(passageId);
        res.json({ stages: stages });
    }
    async getOne(id, res) {
        const foundStage = await this.stageService.getOne(id);
        res.json({ stage: foundStage });
    }
    async create(stage, res) {
        const newStage = await this.stageService.create(stage);
        res.json({ stage: newStage });
    }
};
exports.StageController = StageController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('passageId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "getAllByPassageId", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stage_dto_1.StageDto, Object]),
    __metadata("design:returntype", Promise)
], StageController.prototype, "create", null);
exports.StageController = StageController = __decorate([
    (0, common_1.Controller)('passage/:passageId/stage'),
    __metadata("design:paramtypes", [stage_service_1.StageService])
], StageController);
//# sourceMappingURL=stage.controller.js.map