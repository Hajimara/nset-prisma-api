import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
  @Post()
  async postUser(@Body() body: any) {
    return this.userService.postUser(body);
  }
}
