import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {UserDto} from "../../dto/user.dto";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(user: UserDto) : Promise<boolean> {
    const candidate = await this.prisma.user.findFirst({
      where: {
        login: user.login,
        password: user.password
      },
    });

    return candidate != null;
  }

  create(user: UserDto) {
    return this.prisma.user.create({ data: user });
  }
}
