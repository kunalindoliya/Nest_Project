import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PageModule } from './page/page.module';
import { SectionModule } from './section/section.module';
import { CarousleModule } from './carousle/carousle.module';
import { MatrixModule } from './matrix/matrix.module';
import { FilesModule } from './files/files.module';
import { FullRangeModule } from './full-range/full-range.module';
import { VideoModule } from './video/video.module';

@Module({
  imports: [UserModule, PageModule, SectionModule, CarousleModule, MatrixModule, FilesModule, FullRangeModule, VideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
