import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  username: string = ''; // Nombre del usuario logeado
  isSidebarVisible: boolean = false; // Para mostrar u ocultar el menú lateral

  constructor(private router: Router) {
    // Recuperar el nombre del usuario desde localStorage
    this.username = localStorage.getItem('username') || 'Usuario desconocido';
  }

  // Mostrar u ocultar el menú lateral
  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  // Cerrar el menú al hacer clic en cualquier parte fuera del menú
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const clickedInside = (event.target as HTMLElement).closest('.sidenav') || (event.target as HTMLElement).closest('.dropdown');
    if (!clickedInside) {
      this.isSidebarVisible = false; // Cerrar el menú si se hace clic fuera
    }
  }

  // Navegar a la sección correspondiente
  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
    this.isSidebarVisible = false; // Cerrar el menú lateral después de la navegación
  }

  // Método para cerrar sesión
  logout(): void {
    console.log('Cerrando sesión...');
    localStorage.removeItem('username'); // Eliminar el nombre del usuario
    localStorage.removeItem('role'); // Eliminar el rol
    localStorage.removeItem('token'); // Eliminar el token
    this.router.navigate(['/login']); // Redirigir al login
  }
}
