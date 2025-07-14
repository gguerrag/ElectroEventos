import { Component } from '@angular/core';
import { EventoService } from 'src/app/core/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent {
  evento = {
    nombre: '',
    lugar: '',
    fecha: ''
  };

  constructor(private eventoService: EventoService, private router: Router) { }

  crearEvento() {
    this.eventoService.addEvento(this.evento).subscribe(() => {
      this.router.navigate(['/eventos']); // redirigir después de crear
    });
  }
}
