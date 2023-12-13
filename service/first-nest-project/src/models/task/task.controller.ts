import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { TaskService } from './task.service';
import { TaskDto } from 'src/dto/task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getTasks() {
    return this.taskService.getAll();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() task: TaskDto) {
    return this.taskService.create(task);
  }

  @Patch(':id')
  async toggleDone(@Param('id') id: string) {
    return this.taskService.update(id);
  }
}
