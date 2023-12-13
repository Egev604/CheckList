import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post, Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import {UserDto} from "../../dto/user.dto";
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly jwtService: JwtService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() user: UserDto, @Res() res: Response) {
    const isValidatedUser = await this.authService.validateUser(user);

    if (!isValidatedUser) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const token = this.jwtService.sign(user, {
      secret: "mySecretKey",
      expiresIn: '5m'
    });

    res.json({accessToken: token});
  }
}
