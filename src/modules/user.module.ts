import { DatabaseModule } from '../database/database.module';
import { UserController } from '../controllers/user-controller';
import { userProviders } from '../providers/user.provider';
import { UserService } from '../services/user.services';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...userProviders],
})
export class UserModule {}
