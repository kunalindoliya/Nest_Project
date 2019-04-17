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
  async findByUsernameAndPassword(user: User): Promise<object> {
    // returning object of type {user: User, error: error}
    return new Promise(async (resolve, reject) => {
      await bcrypt.hash(user.password, 10).then(hash => {
        console.log(hash);
        const findUser = this.userRepository.findOne<User>({
          where: {
            username: user.email,
            password: user.password,
          },
        }).then(fuser => {
          bcrypt.compare(user.password, fuser.password).then(res => {
            resolve({
              user: fuser,
            });
          }).catch(error => {
            reject({
              error,
            });
          });
        }).catch(err => {
          reject({
            error: err,
          });
        });
      });
    });
  }
}
