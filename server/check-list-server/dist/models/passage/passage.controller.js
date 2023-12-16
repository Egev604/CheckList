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
exports.PassageController = void 0;
const common_1 = require("@nestjs/common");
const passage_service_1 = require("./passage.service");
const passage_dto_1 = require("../../dto/passage.dto");
let PassageController = class PassageController {
    constructor(passageService) {
        this.passageService = passageService;
    }
    async getAll(res) {
        const passages = await this.passageService.getAll();
        res.json({ passages: passages });
    }
    async getOne(id, res) {
        const foundPassage = await this.passageService.getOne(id);
        res.json({ passage: foundPassage });
    }
    async create(passage, res) {
        const newPassage = await this.passageService.create(passage);
        res.json({ newPassage: newPassage });
    }
};
exports.PassageController = PassageController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PassageController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PassageController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [passage_dto_1.PassageDto, Object]),
    __metadata("design:returntype", Promise)
], PassageController.prototype, "create", null);
exports.PassageController = PassageController = __decorate([
    (0, common_1.Controller)('passage'),
    __metadata("design:paramtypes", [passage_service_1.PassageService])
], PassageController);
//# sourceMappingURL=passage.controller.js.map