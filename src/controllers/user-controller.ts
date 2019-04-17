import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { UserService } from '../services/user.services';
import { User } from '../models/user';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/login')
  getLogin() {
    // Render login page
  }
  @Get('/data')
  getUsers() {
    return this.userService.findAll();
  }
  @Post('/login')
  postLogin(@Body() user: User) {
    return this.userService.findByUsernameAndPassword(user);
  }

  @Post('/addUser')
  postAddUser(@Body() user: User) {
    this.userService.adduser(user);
  }
}
