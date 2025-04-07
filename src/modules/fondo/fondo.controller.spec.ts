import { Test, TestingModule } from '@nestjs/testing';
import { FondoController } from './fondo.controller';
import { FondoService } from './fondo.service';

describe('FondoController', () => {
  let controller: FondoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FondoController],
      providers: [FondoService],
    }).compile();

    controller = module.get<FondoController>(FondoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
