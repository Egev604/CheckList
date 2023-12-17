import { Module } from '@nestjs/common';
import { PassageService } from './passage.service';
import { PassageController } from './passage.controller';
import {PrismaService} from "../../prisma.service";
import {UserService} from "../user/user.service";

@Module({
  providers: [PassageService, PrismaService, UserService],
  controllers: [PassageController]
})
export class PassageModule {}
