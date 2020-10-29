import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { GuardWardGuard } from './services/guard-ward.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { 
    path: 'protegida', 
    component: ProtegidaComponent,
    canActivate: [GuardWardGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
