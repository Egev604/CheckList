import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {UserDto} from "../../dto/user.dto";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.user.findMany();
  }

  async getOne(userId: number) {
    return this.prisma.user.findUnique({
      where: {
        id: +userId
      }
    })
  }

  async create(user: UserDto) {
    return this.prisma.user.create({ data: user });
  }

  async update(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: +id,
      },
    });

    if (!user) return null;

    return this.prisma.user.update({
      where: {
        id: +user.id,
      },
      data: {
        login: user.login,
        password: user.password,
      },
    });
  }


}
