import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
  { path: 'cadastro', component: CadastroComponent }, // Rota de cadastro
];

