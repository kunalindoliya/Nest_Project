import { Module } from '@nestjs/common';
import { CarousleController } from './carousle.controller';
import { CarousleService } from './carousle.service';

@Module({
  controllers: [CarousleController],
  providers: [CarousleService]
})
export class CarousleModule {}
