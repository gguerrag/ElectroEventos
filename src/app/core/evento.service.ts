import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  getEventos() {
    return [
      { id: 1, nombre: 'Techno Night', fecha: '2025-07-15', estilo: 'Techno' }
    ];
  }
}
