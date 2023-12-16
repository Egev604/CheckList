import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './models/task/task.module';
import {UserModule} from "./models/user/user.module";
import {PassageModule} from "./models/passage/passage.module";
import {AuthModule} from "./models/auth/auth.module";
import {StageModule} from "./models/stage/stage.module";

@Module({
  imports: [TaskModule, UserModule, PassageModule, AuthModule, StageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}