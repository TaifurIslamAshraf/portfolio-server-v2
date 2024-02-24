import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { IsAuthorize, JwtGuard } from 'src/auth/guards/jwt.guard';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @UseGuards(JwtGuard, IsAuthorize)
  @Get() //get all users
  async findUsers() {
    const users = await this.userService.findAll();

    return users;
  }

  @UseGuards(JwtGuard, IsAuthorize)
  @Get(':id')
  async getUserProfile(@Param('id') id: number) {
    const user = await this.userService.findById(id);
    delete user.password;
    return user;
  }
}
