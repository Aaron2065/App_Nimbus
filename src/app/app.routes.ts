import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MaestroComponent } from './maestro/maestro.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { LoginComponent } from './auth/login/login.component';
import { CreateUserComponent } from './admin/create-user/create-user.component';
import { UserListComponent } from './admin/user-list/user-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'libros', component: AdminComponent }, // Aquí deberías redirigir a la sección de libros
  { path: 'usuarios', component: UserListComponent },
  { path: 'crear-usuario', component: CreateUserComponent },
  { path: 'grupos', component: AdminComponent }, // Aquí rediriges a la sección de administrar grupos
  { path: 'maestro', component: MaestroComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
