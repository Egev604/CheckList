import { Module } from '@nestjs/common';
import { StageController } from './stage.controller';
import { StageService } from './stage.service';
import {PrismaService} from "../../prisma.service";
import {PassageService} from "../passage/passage.service";
import {UserService} from "../user/user.service";

@Module({
  controllers: [StageController],
  providers: [StageService, PrismaService, UserService, PassageService]
})
export class StageModule {

}
