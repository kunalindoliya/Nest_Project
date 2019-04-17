import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../services/user.services';
import { User } from '../models/user';
// @ts-ignore
import * as Puid from 'puid';

const puid = new Puid();

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
   this.userService.findByUsernameAndPassword(user).then((fuser) => {
     console.log(puid.generate());
   }).catch(err => console.log(err));
  }

  @Post('/addUser')
  postAddUser(@Body() user: User) {
    console.log(Puid.generate());
    this.userService.adduser(user);
  }
}
