import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { RoutesComponent } from './componentes/routes/routes.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './componentes/guardians/auth.guard';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'dashboard',component: DashboardComponent,canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},   
  {path: 'routes', component: RoutesComponent,canActivate: [AuthGuard]}, 
  {path: '**', component: NoEncontradoComponent,canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
