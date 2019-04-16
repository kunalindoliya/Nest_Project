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
  async findByUsernameAndPassword(): Promise<User> {
    return null;
  }
}
