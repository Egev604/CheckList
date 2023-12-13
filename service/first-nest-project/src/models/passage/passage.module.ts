import { Module } from '@nestjs/common';
import { PassageService } from './passage.service';
import { PassageController } from './passage.controller';

@Module({
  providers: [PassageService],
  controllers: [PassageController]
})
export class PassageModule {}
