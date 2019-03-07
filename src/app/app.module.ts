import { LoginService } from './services/login.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importacion de libreria de firebase
import { environment } from '../environments/environment';
import{AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule} from'@angular/fire/firestore';
import{AngularFireAuthModule} from'@angular/fire/auth';

//Importación de librerias para mensajes
import {FlashMessagesModule } from 'angular2-flash-messages';
//Importación librería ng module
import{FormsModule} from '@angular/forms';
<<<<<<< HEAD

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

=======
//Importación de librerias para enrutamiento
>>>>>>> LIST AND ADD. MODULE CENOTE
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importacion de los componentes a usar
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
<<<<<<< HEAD

import { RoutesComponent } from './componentes/routes/routes.component';
import { RouteComponent } from './componentes/routes/route/route.component';
import { RouteListComponent } from './componentes/routes/route-list/route-list.component';
import { RouteService } from './shared/route.service';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './componentes/guardians/auth.guard';

=======
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { from } from 'rxjs';
import { RutasComponent } from './componentes/rutas/rutas.component';
import { CenotesComponent } from './componentes/cenotes/cenotes.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { CenoteService } from './servicios/cenote.service';
import { AddCenoteComponent } from './componentes/add-cenote/add-cenote.component';
>>>>>>> LIST AND ADD. MODULE CENOTE

@NgModule({
  declarations: [
    //Todos los componentes
    AppComponent,
<<<<<<< HEAD
    LoginComponent,   
    NoEncontradoComponent,   
    RoutesComponent,
    RouteComponent,
    RouteListComponent,
    DashboardComponent,
    HomeComponent,
    
=======
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    CabeceroComponent,
    RutasComponent,
    CenotesComponent,
    PiePaginaComponent,
    AddCenoteComponent,

>>>>>>> LIST AND ADD. MODULE CENOTE
  ],
  imports: [
    BrowserModule,
    //Enrutamiento
    AppRoutingModule,
    //firebase
    AngularFireModule.initializeApp(environment.firestore,'cenotes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    ToastrModule.forRoot()
  ],
  
  providers: [LoginService, RouteService,AuthGuard],
=======
    //NgModule
    FormsModule,
    //Mensajes
    FlashMessagesModule.forRoot()
  ],
  providers: [LoginService, CenoteService],
>>>>>>> LIST AND ADD. MODULE CENOTE
  bootstrap: [AppComponent]
})
export class AppModule { }
