import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html'
})
export class CrearEventoComponent implements OnInit {

  crearEventoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.crearEventoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fecha: ['', Validators.required],
      estilo: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      ubicacion: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.crearEventoForm.invalid) {
      this.crearEventoForm.markAllAsTouched();
      return;
    }

    console.log('Evento creado:', this.crearEventoForm.value);
    alert('Evento creado con éxito: ' + JSON.stringify(this.crearEventoForm.value));
  }
}
