import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEventosComponent } from './eventos/lista-eventos/lista-eventos.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { DetalleEventoComponent } from './eventos/detalle-evento/detalle-evento.component';
import { CrearEventoComponent } from './eventos/crear-evento/crear-evento.component';
import { EditarEventoComponent } from './eventos/editar-evento/editar-evento.component';
import { GestionarEventosComponent } from './admin/gestionar-eventos/gestionar-eventos.component';
import { GestionarUsuariosComponent } from './admin/gestionar-usuarios/gestionar-usuarios.component';

const routes: Routes = [
  { path: '', component: ListaEventosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'evento/:id', component: DetalleEventoComponent },
  { path: 'crear-evento', component: CrearEventoComponent },
  { path: 'editar-evento/:id', component: EditarEventoComponent },
  { path: 'admin/eventos', component: GestionarEventosComponent },
  { path: 'admin/usuarios', component: GestionarUsuariosComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
