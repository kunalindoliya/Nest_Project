import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/user.entity';
import { Page } from 'src/page/page.entity';
import { Section } from 'src/section/section.entity';

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
      sequelize.addModels([User,Page,Section]);
      await sequelize.sync({force:true});
      return sequelize;
    },
  },
];
