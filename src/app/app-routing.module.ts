import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './componentes/guardians/auth.guard';
import { CenotesComponent } from './componentes/cenotes/cenotes.component';
import { AddCenoteComponent } from './componentes/add-cenote/add-cenote.component';
import { RoutesComponent } from './componentes/routes/routes.component';
import { DetailsRouteComponent } from './componentes/details-route/details-route.component';
import { ListRoutesComponent } from './componentes/list-routes/list-routes.component';

const routes: Routes = [
  //Rutas para componentes
  {path:'',component: HomeComponent},
  {path:'dashboard',component: DashboardComponent,canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'routes', component: RoutesComponent,canActivate: [AuthGuard]},
  {path: 'routes/id', component: DetailsRouteComponent,canActivate: [AuthGuard]},
  {path: 'listRoutes', component: ListRoutesComponent,canActivate: [AuthGuard]},
  {path: 'cenotes', component: CenotesComponent,canActivate: [AuthGuard]},
  {path: 'addCenote', component: AddCenoteComponent,canActivate: [AuthGuard]},
  {path: '**', component: NoEncontradoComponent,canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
