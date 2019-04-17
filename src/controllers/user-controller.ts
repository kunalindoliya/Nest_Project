import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { UserService } from '../services/user.services';
import { User } from '../models/user';
import * as bcrypt from 'bcrypt';

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
   this.userService.findByUsernameAndPassword(user).then(user => {
     console.log(user);
   }).catch();
  }

  @Post('/addUser')
  postAddUser(@Body() user: User) {
    this.userService.adduser(user);
  }
}
