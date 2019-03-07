import { Injectable } from '@angular/core';
import {  AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Cenote } from '../modelo/cenote.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CenoteService {
  formData:Cenote;

  constructor(private firestore : AngularFirestore){}
  getCenotes(){
    return this.firestore.collection('cenotes').snapshotChanges();
  }
}
