"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassageModule = void 0;
const common_1 = require("@nestjs/common");
const passage_service_1 = require("./passage.service");
const passage_controller_1 = require("./passage.controller");
const prisma_service_1 = require("../../prisma.service");
let PassageModule = class PassageModule {
};
exports.PassageModule = PassageModule;
exports.PassageModule = PassageModule = __decorate([
    (0, common_1.Module)({
        providers: [passage_service_1.PassageService, prisma_service_1.PrismaService],
        controllers: [passage_controller_1.PassageController]
    })
], PassageModule);
//# sourceMappingURL=passage.module.js.map