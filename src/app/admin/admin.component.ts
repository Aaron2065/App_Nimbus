import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // Importa el HeaderComponent

@Component({
  selector: 'app-admin',
  standalone: true, // Si AdminComponent también es standalone
  imports: [HeaderComponent], // Asegúrate de agregar HeaderComponent en los imports
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  // Lógica del componente Admin
}
