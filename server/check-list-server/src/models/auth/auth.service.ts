import {Injectable} from '@nestjs/common';
import {PrismaService} from 'src/prisma.service';
import {UserDto} from "../../dto/user.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private readonly jwtService: JwtService) {}
  private readonly SECRET_KEY = 'HACK';

  async validateUser(user: UserDto) {
    return this.prisma.user.findUnique({
      where: {
        login: user.login,
      },
    });
  }

  isValidatePassword(password: string) {
    return password.length >= 8;
  }

  async create(user: UserDto) {
    return this.prisma.user.create({ data: user });
  }

  createToken(user: UserDto) {
    return this.jwtService.sign(user, {
      secret: this.SECRET_KEY,
      expiresIn: '1d'
    });
  }
}
