/**
 * @description Componente encargado de mostrar la lista de eventos disponibles.
 * Renderiza la información de los eventos utilizando tarjetas.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html'
})
export class ListaEventosComponent {
  eventos = [
    { id: 1, nombre: 'Techno Night', fecha: '2025-07-15', estilo: 'Techno' },
    { id: 2, nombre: 'Hardstyle Arena', fecha: '2025-08-20', estilo: 'Hardstyle' }
  ];
}