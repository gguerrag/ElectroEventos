import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create register component', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('form should be valid with correct values', () => {
    component.registerForm.controls['nombre'].setValue('Gonzalo');
    component.registerForm.controls['email'].setValue('g.guerragaldames@gmail.com');
    component.registerForm.controls['password'].setValue('123456');
    component.registerForm.controls['confirmarPassword'].setValue('123456');

    component.registerForm.updateValueAndValidity();

    expect(component.registerForm.valid).toBeTruthy();
  });
});
