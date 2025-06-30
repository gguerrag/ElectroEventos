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

  it('should return an array of eventos', () => {
    const eventos = service.getEventos();
    expect(eventos.length).toBeGreaterThan(0);
  });

  it('should have an evento with nombre Techno Night', () => {
    const evento = service.getEventos().find(e => e.nombre === 'Techno Night');
    expect(evento).toBeDefined();
  });
});
