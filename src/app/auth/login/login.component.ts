import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // Indicamos que es un componente standalone
  imports: [CommonModule, ReactiveFormsModule], // Importamos ReactiveFormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = ''; // Para mostrar los mensajes de error

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
  
      // Hacer la solicitud POST al backend
      this.http.post<any>('http://localhost:5029/api/Usuarios/login', { email, password }).subscribe(
        (response) => {
          // Verificar la respuesta en consola
          console.log('Respuesta del login:', response);
  
          // Almacenar el nombre de usuario en localStorage
          localStorage.setItem('username', response.nombre); // Usa 'nombre' en minúscula
          localStorage.setItem('role', response.role); // Usa 'role' en minúscula
          localStorage.setItem('token', response.token); // Usa 'token'
  
          // Redirigir al rol adecuado
          switch (response.role) { // Asegúrate de que sea 'role' en minúsculas
            case 'Administrador':
              this.router.navigate(['/admin']);
              break;
            case 'Maestro':
              this.router.navigate(['/maestro']);
              break;
            case 'Alumno':
              this.router.navigate(['/alumno']);
              break;
            default:
              this.errorMessage = 'Rol no reconocido';
              break;
          }
        },
        (error) => {
          console.error('Error en el login', error);
          this.errorMessage = 'Credenciales incorrectas. Intenta nuevamente.';
        }
      );
    }
  }  

  onCancel(): void {
    this.loginForm.reset();
    this.errorMessage = ''; // Limpiamos el mensaje de error
    console.log('Formulario cancelado');
  }
}
