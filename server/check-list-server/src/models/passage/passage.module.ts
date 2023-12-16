import { Module } from '@nestjs/common';
import { PassageService } from './passage.service';
import { PassageController } from './passage.controller';
import {PrismaService} from "../../prisma.service";

@Module({
  providers: [PassageService, PrismaService],
  controllers: [PassageController]
})
export class PassageModule {}
