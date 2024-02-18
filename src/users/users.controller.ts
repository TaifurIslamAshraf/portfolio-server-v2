import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //get all users
  findUsers() {
    return ['hello how are you'];
  }
}
