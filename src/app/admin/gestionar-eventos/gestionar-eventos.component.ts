import { Component } from '@angular/core';

@Component({
  selector: 'app-gestionar-eventos',
  templateUrl: './gestionar-eventos.component.html'
})
export class GestionarEventosComponent {
  eventos = [
    { nombre: 'Techno Night', fecha: '2025-07-15' },
    { nombre: 'Hardstyle Arena', fecha: '2025-08-20' }
  ];
}
