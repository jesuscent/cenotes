import { LoginService } from './services/login.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importacion de libreria de firebase 
import { environment } from '../environments/environment';
import{AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule} from'@angular/fire/firestore';
import{AngularFireAuthModule} from'@angular/fire/auth';
import {FlashMessagesModule } from 'angular2-flash-messages';
import{FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importacion de los componentes a usar
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';

import { RoutesComponent } from './componentes/routes/routes.component';
import { RouteComponent } from './componentes/routes/route/route.component';
import { RouteListComponent } from './componentes/routes/route-list/route-list.component';
import { RouteService } from './shared/route.service';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './componentes/guardians/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,   
    NoEncontradoComponent,   
    RoutesComponent,
    RouteComponent,
    RouteListComponent,
    DashboardComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore,'cenotes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    ToastrModule.forRoot()
  ],
  
  providers: [LoginService, RouteService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
