import { Test, TestingModule } from '@nestjs/testing';
import { ConceptoMovimientoController } from './concepto_movimiento.controller';
import { ConceptoMovimientoService } from './concepto_movimiento.service';

describe('ConceptoMovimientoController', () => {
  let controller: ConceptoMovimientoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConceptoMovimientoController],
      providers: [ConceptoMovimientoService],
    }).compile();

    controller = module.get<ConceptoMovimientoController>(ConceptoMovimientoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
