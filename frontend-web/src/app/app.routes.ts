import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CompetitionsComponent } from './pages/competitions/competitions.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // ⬅️ redirige vers home par défaut
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'competitions', component: CompetitionsComponent }
];
