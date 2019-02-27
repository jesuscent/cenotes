import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { RutasComponent } from './componentes/rutas/rutas.component';

const routes: Routes = [
  {path: '', component: CabeceroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path: 'rutas', component: RutasComponent},
 
  {path: '**', component: NoEncontradoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
