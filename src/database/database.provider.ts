import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        operatorsAliases: false,
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'w8mediaworks',
      });
      sequelize.addModels([User]);
      return sequelize;
    },
  },
];
