import { Module } from '@nestjs/common';
import { FullRangeController } from './full-range.controller';
import { FullRangeService } from './full-range.service';

@Module({
  controllers: [FullRangeController],
  providers: [FullRangeService]
})
export class FullRangeModule {}
