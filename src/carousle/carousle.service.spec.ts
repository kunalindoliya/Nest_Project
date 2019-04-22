import { Test, TestingModule } from '@nestjs/testing';
import { CarousleService } from './carousle.service';

describe('CarousleService', () => {
  let service: CarousleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarousleService],
    }).compile();

    service = module.get<CarousleService>(CarousleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
