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

import { UserService } from './user.service';
import {UserDto} from "../../dto/user.dto";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') userId: number) {
    return this.userService.getOne(userId);
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() user: UserDto) {
    return this.userService.create(user);
  }

  @Patch(':id')
  async update(@Param('id') id: string) {
    return this.userService.update(id);
  }
}
