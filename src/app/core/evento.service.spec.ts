import { TestBed } from '@angular/core/testing';
import { EventoService } from './evento.service';

describe('EventoService', () => {
  let service: EventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of eventos', () => {
    const eventos = service.getEventos();
    expect(eventos.length).toBeGreaterThan(0);
    expect(eventos[0].nombre).toBeDefined();
    expect(eventos[0].fecha).toBeDefined();
  });
});
