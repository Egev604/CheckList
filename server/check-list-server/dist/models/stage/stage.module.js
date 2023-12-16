"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StageModule = void 0;
const common_1 = require("@nestjs/common");
const stage_controller_1 = require("./stage.controller");
const stage_service_1 = require("./stage.service");
const prisma_service_1 = require("../../prisma.service");
let StageModule = class StageModule {
};
exports.StageModule = StageModule;
exports.StageModule = StageModule = __decorate([
    (0, common_1.Module)({
        controllers: [stage_controller_1.StageController],
        providers: [stage_service_1.StageService, prisma_service_1.PrismaService]
    })
], StageModule);
//# sourceMappingURL=stage.module.js.map