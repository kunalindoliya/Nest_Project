import { User } from '../models/user';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export  class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
  ) {}
  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>();
  }
  async findByUsernameAndPassword(user: User): Promise<User> {
    return await this.userRepository.findOne<User>({
      where: {
        username: user.username,
        password: user.password,
      },
    });
  }
}
