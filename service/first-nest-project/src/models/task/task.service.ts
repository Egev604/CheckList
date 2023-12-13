import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from 'src/dto/task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.task.findMany();
  }

  create(task: TaskDto) {
    return this.prisma.task.create({ data: task });
  }

  async update(id: string) {
    const task = await this.prisma.task.findUnique({
      where: {
        id: +id,
      },
    });

    if (!task) return null;

    return this.prisma.task.update({
      where: {
        id: task.id,
      },
      data: {
        isDone: !task.isDone,
      },
    });
  }
}
