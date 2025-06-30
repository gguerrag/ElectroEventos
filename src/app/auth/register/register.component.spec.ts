import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create register component', () => {
    expect(component).toBeTruthy();
  });

  it('should have form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should have form valid when correct values are provided', () => {
    component.registerForm.controls['nombre'].setValue('Usuario');
    component.registerForm.controls['email'].setValue('test@test.com');
    component.registerForm.controls['password'].setValue('Test123!');
    component.registerForm.controls['confirmarPassword'].setValue('Test123!');
    expect(component.registerForm.valid).toBeTruthy();
  });
});
