import { Controller, Get, Render } from '@nestjs/common';
import { UserService } from '../services/user.services';

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
}
