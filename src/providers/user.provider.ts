import { User } from '../models/user';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
