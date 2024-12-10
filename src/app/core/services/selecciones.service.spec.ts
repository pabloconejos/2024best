import { TestBed } from '@angular/core/testing';

import { SeleccionesService } from './selecciones.service';

describe('SeleccionesService', () => {
  let service: SeleccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeleccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
