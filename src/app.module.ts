import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PageModule } from './page/page.module';
import { SectionModule } from './section/section.module';
import { CarousleModule } from './carousle/carousle.module';
import { MatrixModule } from './matrix/matrix.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [UserModule, PageModule, SectionModule, CarousleModule, MatrixModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
