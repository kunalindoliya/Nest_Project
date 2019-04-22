import { Test, TestingModule } from '@nestjs/testing';
import { FullRangeController } from './full-range.controller';

describe('FullRange Controller', () => {
  let controller: FullRangeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FullRangeController],
    }).compile();

    controller = module.get<FullRangeController>(FullRangeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
