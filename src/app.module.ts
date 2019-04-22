import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PageModule } from './page/page.module';
import { SectionModule } from './section/section.module';

@Module({
  imports: [UserModule, PageModule, SectionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
