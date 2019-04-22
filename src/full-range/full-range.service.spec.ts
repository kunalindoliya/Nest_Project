import { Test, TestingModule } from '@nestjs/testing';
import { FullRangeService } from './full-range.service';

describe('FullRangeService', () => {
  let service: FullRangeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FullRangeService],
    }).compile();

    service = module.get<FullRangeService>(FullRangeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
