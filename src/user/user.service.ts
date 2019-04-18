import { Injectable, Inject } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
      ) { }

    async adduser(user: User): Promise<User> {
        const newPass = await bcrypt.hash(user.password, 10)
        user.password = newPass;
        return this.userRepository.create(user);
        /*bcrypt.hash(user.password, 10).then((hash) => {
          user.password = hash;
          return this.userRepository.create(user);
        }).catch(err => console.log(err));*/
        return null;
      }
      async findAll(): Promise<User[]> {
        return await this.userRepository.findAll<User>();
      }
      async findByEmail(user: User): Promise<object> {
        // returning object of type {user: User, error: error}
        return new Promise(async (resolve, reject) => {
          await this.userRepository.findOne<User>({
            where: {
              email: user.email,
            },
          }).then(async (fuser) => {
            const valid = await bcrypt.compare(user.password, fuser.password);
            if (!valid) {
              reject({
                error: { message: 'Password does not match' },
              });
              return;
            } else {
              resolve({user: fuser});
            }
          }).catch(err => {
            reject({
              error: err,
            });
          });
        });
      }
}
