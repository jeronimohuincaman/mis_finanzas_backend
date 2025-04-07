import { Test, TestingModule } from '@nestjs/testing';
import { MedioTransaccionService } from './medio_transaccion.service';

describe('MedioTransaccionService', () => {
  let service: MedioTransaccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedioTransaccionService],
    }).compile();

    service = module.get<MedioTransaccionService>(MedioTransaccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
