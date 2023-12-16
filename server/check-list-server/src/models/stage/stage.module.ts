import { Module } from '@nestjs/common';
import { StageController } from './stage.controller';
import { StageService } from './stage.service';
import {PrismaService} from "../../prisma.service";

@Module({
  controllers: [StageController],
  providers: [StageService, PrismaService]
})
export class StageModule {

}
