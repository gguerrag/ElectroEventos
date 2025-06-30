import { Component } from '@angular/core';

@Component({
  selector: 'app-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.css']
})
export class GestionarUsuariosComponent {
  usuarios = [
    { nombre: 'Gonzalo', email: 'g.guerragaldames@gmail.com' },
    { nombre: 'Alejandro', email: 'clever.uno@live.cl' }
  ];
}