import { User } from '../models/user';
import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
  ) { }

  async adduser(user: User): Promise<User> {
    bcrypt.hash(user.password, 10).then((hash) => {
      user.password = hash;
      return this.userRepository.create(user);
    }).catch(err => console.log(err));
    return null;
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }
  async findByUsernameAndPassword(user: User): Promise<User> {
    bcrypt.hash(user.password, 10).then(hash => {
      return this.userRepository.findOne<User>({
        where: {
          username: user.username,
          password: user.password,
        },
      });
    }).catch(err => console.log(err));
  }
}
