import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Componente encargado del registro de usuarios.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmarPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  /**
   * Valida que las contraseñas sean iguales.
   */
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmarPassword')!.value
      ? null : { 'mismatch': true };
  }

  /**
   * Envía el formulario si es válido.
   */
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Formulario enviado:', this.registerForm.value);
    }
  }
}
