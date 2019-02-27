import { LoginService } from './servicios/login.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//importacion de libreria de firebase 
import { environment } from '../environments/environment';
import{AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule, FirestoreSettingsToken} from'@angular/fire/firestore';
import{AngularFireAuthModule} from'@angular/fire/auth';
import {FlashMessagesModule } from 'angular2-flash-messages';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importacion de los componentes a usar
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { from } from 'rxjs';
import { RutasComponent } from './componentes/rutas/rutas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    CabeceroComponent,
    RutasComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore,'cenotes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
