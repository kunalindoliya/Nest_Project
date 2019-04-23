import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import * as Puid from 'puid';
const puid=new Puid(true);

@Controller('user')
export class UserController {
    constructor(private userService: UserService){};
    
    @Get('/data')
    getUsers() {
      return this.userService.findAll();
    }
    @Post('/login')
    postLogin(@Body() userDetails: User) {
      this.userService.findByEmail(userDetails).then((data) => {
        console.log(data['user']['dataValues']);
      }).catch(err => console.log(err));
    }
  
    @Post('/addUser')
    postAddUser(@Body() user: User) {
      user.id=puid.generate();
      this.userService.adduser(user);
    }
}
