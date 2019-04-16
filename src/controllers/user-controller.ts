import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { UserService } from '../services/user.services';
import { User } from '../models/user';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/login')
  @Render('login')
  getLogin() {
    // Render login page
  }
  @Get('/data')
  getUsers() {
   this.userService.findAll().then((rows) => {
      console.log(rows);
   }).catch(err => console.log(err));
  }
  @Post('/login')
  postLogin(@Body() user: User) {
    this.userService.findByUsernameAndPassword(user).then((rows) => {
      console.log(rows);
    }).catch(err => console.log(err));
  }
}
