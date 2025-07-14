import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/core/evento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.css']
})
export class EditarEventoComponent implements OnInit {
  evento: any = { id: null, nombre: '', lugar: '', fecha: '' };

  constructor(
    private eventoService: EventoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.eventoService.getEventos().subscribe(eventos => {
      this.evento = eventos.find((e: any) => e.id === id);
    });
  }

  actualizarEvento() {
    this.eventoService.updateEvento(this.evento).subscribe(() => {
      this.router.navigate(['/eventos']); // redirigir después de actualizar
    });
  }
}
