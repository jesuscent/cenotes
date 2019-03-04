import { Injectable } from '@angular/core';
import { Route } from './route.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  
  formData:Route;

  constructor(private firestore: AngularFirestore) { }

  getRoutes(){
    return this.firestore.collection('routes').snapshotChanges();
  }
}
