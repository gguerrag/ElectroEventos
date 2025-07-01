/**
 * Servicio que gestiona los eventos de la aplicación.
 * Permite obtener la lista de eventos y gestionar la información de cada uno.
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  /**
   * Lista simulada de eventos disponibles en la aplicación.
   */
  getEventos() {
    return [
        { id: 1, nombre: 'Techno Night', fecha: '2025-07-15', estilo: 'Techno' },
        { id: 2, nombre: 'Hardstyle Arena', fecha: '2025-08-20', estilo: 'Hardstyle' }
      
    ];
  }
}
