import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
<<<<<<< HEAD
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
=======
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { RutasComponent } from './componentes/rutas/rutas.component';
import { CenotesComponent } from './componentes/cenotes/cenotes.component';
import { AddCenoteComponent } from './componentes/add-cenote/add-cenote.component';

const routes: Routes = [
  //Rutas para componentes
  {path: '', component: CabeceroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'rutas', component: RutasComponent},
  {path: 'cenotes', component: CenotesComponent},
  {path: 'addCenote', component: AddCenoteComponent},
  {path: '**', component: NoEncontradoComponent},
>>>>>>> LIST AND ADD. MODULE CENOTE
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
