import { Test, TestingModule } from '@nestjs/testing';
import { CarousleController } from './carousle.controller';

describe('Carousle Controller', () => {
  let controller: CarousleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarousleController],
    }).compile();

    controller = module.get<CarousleController>(CarousleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
