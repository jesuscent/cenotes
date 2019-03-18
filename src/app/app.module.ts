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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
//Importación de librerias para enrutamiento
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importacion de los componentes a usar
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { RouteService } from './shared/route.service';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './componentes/guardians/auth.guard';
import { CenotesComponent } from './componentes/cenotes/cenotes.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';

import { AddCenoteComponent } from './componentes/add-cenote/add-cenote.component';
import { CenoteService } from './servicios/cenote.service';
import { RoutesComponent } from './componentes/routes/routes.component';
import { DetailsRouteComponent } from './componentes/details-route/details-route.component';
import { ListRoutesComponent } from './componentes/list-routes/list-routes.component';


@NgModule({
  declarations: [
    //Todos los componentes
    AppComponent,
    LoginComponent,   
    NoEncontradoComponent,
    DashboardComponent,
    HomeComponent, 
    CenotesComponent,
    PiePaginaComponent,
    AddCenoteComponent,
    RoutesComponent,
    DetailsRouteComponent,
    ListRoutesComponent,
  ],
  imports: [
    BrowserModule,
    //Enrutamiento
    AppRoutingModule,
    //firebase
    AngularFireModule.initializeApp(environment.firestore,'cenotes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    ToastrModule.forRoot(),
    //NgModule
    FormsModule,
    //Mensajes
    FlashMessagesModule.forRoot()
  ],
  
    providers: [LoginService, RouteService,AuthGuard, CenoteService],

  bootstrap: [AppComponent]
})
export class AppModule { }
