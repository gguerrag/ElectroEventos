import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ProfileComponent } from './auth/profile/profile.component';

import { ListaEventosComponent } from './eventos/lista-eventos/lista-eventos.component';
import { DetalleEventoComponent } from './eventos/detalle-evento/detalle-evento.component';
import { CrearEventoComponent } from './eventos/crear-evento/crear-evento.component';
import { EditarEventoComponent } from './eventos/editar-evento/editar-evento.component';

import { GestionarUsuariosComponent } from './admin/gestionar-usuarios/gestionar-usuarios.component';
import { GestionarEventosComponent } from './admin/gestionar-eventos/gestionar-eventos.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CardEventoComponent } from './shared/card-evento/card-evento.component';
import { CardEventComponent } from './shared/card-event/card-event.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    ListaEventosComponent,
    DetalleEventoComponent,
    CrearEventoComponent,
    EditarEventoComponent,
    GestionarUsuariosComponent,
    GestionarEventosComponent,
    NavbarComponent,
    FooterComponent,
    CardEventoComponent,
    CardEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
