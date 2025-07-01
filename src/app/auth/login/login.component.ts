import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Componente encargado del login de usuarios.
 * Incluye formulario reactivo con validaciones.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  /**
   * Formulario reactivo del login.
   */
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  /**
   * Inicializa el formulario reactivo.
   */
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /**
   * Envía los datos del formulario para iniciar sesión.
   */
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Datos enviados:', this.loginForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
