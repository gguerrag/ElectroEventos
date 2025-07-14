/**
 * @description Componente encargado de mostrar la lista de eventos disponibles.
 * Renderiza la información de los eventos utilizando tarjetas.
 */
import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/core/evento.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {
  eventos: any[] = [];

  constructor(private eventoService: EventoService) { }

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos() {
    this.eventoService.getEventos().subscribe(data => {
      this.eventos = data;
    });
  }

  eliminarEvento(id: number) {
    this.eventoService.deleteEvento(id).subscribe(() => {
      this.cargarEventos(); // recarga la lista después de borrar
    });
  }
}
