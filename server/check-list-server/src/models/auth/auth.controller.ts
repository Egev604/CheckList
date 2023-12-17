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
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() user: UserDto, @Res() res: Response) {
    const isValidatedUser = await this.authService.validateUser(user);

    if (!isValidatedUser) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const token = this.authService.createToken(user);

    res.json({accessToken: token, user: user});
  }

  @Post('register')
  @UsePipes(new ValidationPipe())
  async register(@Body() user: UserDto, @Res() res: Response) {
    const isValidatedUser = await this.authService.validateUser(user);

    if (isValidatedUser) {
      res.status(401).json({message: 'User already exists'});
      return;
    }

    const isValidatedPassword = this.authService.isValidatePassword(user.password);

    if (!isValidatedPassword) {
      res.status(401).json({message: 'The password must consist of 8 characters'});
      return;
    }

    return this.authService.create(user);
  }
}
