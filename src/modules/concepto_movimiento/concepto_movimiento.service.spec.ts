import { Test, TestingModule } from '@nestjs/testing';
import { ConceptoMovimientoService } from './concepto_movimiento.service';

describe('ConceptoMovimientoService', () => {
  let service: ConceptoMovimientoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConceptoMovimientoService],
    }).compile();

    service = module.get<ConceptoMovimientoService>(ConceptoMovimientoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
