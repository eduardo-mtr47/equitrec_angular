import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CompetitionsComponent } from './pages/competitions/competitions.component';
import { ResultatsComponent } from './pages/resultats/resultats.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'resultats', component: ResultatsComponent },
  { path: 'statistiques', component: StatistiquesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
