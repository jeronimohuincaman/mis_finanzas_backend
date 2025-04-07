import { Test, TestingModule } from '@nestjs/testing';
import { FondoService } from './fondo.service';

describe('FondoService', () => {
  let service: FondoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FondoService],
    }).compile();

    service = module.get<FondoService>(FondoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
