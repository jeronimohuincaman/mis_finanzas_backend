import { Test, TestingModule } from '@nestjs/testing';
import { MedioTransaccionController } from './medio_transaccion.controller';
import { MedioTransaccionService } from './medio_transaccion.service';

describe('MedioTransaccionController', () => {
  let controller: MedioTransaccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedioTransaccionController],
      providers: [MedioTransaccionService],
    }).compile();

    controller = module.get<MedioTransaccionController>(MedioTransaccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
