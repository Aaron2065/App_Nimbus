import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Asegúrate de que CommonModule esté importado

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5029/api/Usuarios').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }
}
