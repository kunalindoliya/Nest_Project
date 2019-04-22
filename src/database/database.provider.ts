import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/user/user.entity';
import { Page } from 'src/page/page.entity';
import { Section } from 'src/section/section.entity';
import { Matrix } from 'src/matrix/matrix.entity';
import { Carousle } from 'src/carousle/carousle.entity';
import { Files } from 'src/files/files.entity';
import { FullRange } from 'src/full-range/full-range.entity';
import { Video } from 'src/video/video.entity';

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
      sequelize.addModels([User,Page,Section,Carousle,Matrix,Files,FullRange,Video]);
      await sequelize.sync({force:true});
      return sequelize;
    },
  },
];
