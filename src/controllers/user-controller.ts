import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.services';
import { User } from '../models/user';
import * as Puid from 'puid';

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
   }).catch(err => console.log(err));
  }

  @Post('/addUser')
  postAddUser(@Body() user: User) {
    console.log(Puid.generate());
    this.userService.adduser(user);
  }
}
