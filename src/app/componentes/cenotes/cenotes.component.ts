import { Component, OnInit } from '@angular/core';
import { CenoteService } from 'src/app/servicios/cenote.service';
import { Cenote } from 'src/app/modelo/cenote.model';
import {  FlashMessagesService } from 'angular2-flash-messages';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cenotes',
  templateUrl: './cenotes.component.html',
  styleUrls: ['./cenotes.component.css']
})
export class CenotesComponent implements OnInit {
  list: Cenote[];


  constructor(private cenoteService : CenoteService, private firestore : AngularFirestore) { }

  //Obtener la lista de los cenotes
  ngOnInit() {
    this.cenoteService.getCenotes().subscribe(
      //Listado de cenotes
      actionArray => {this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Cenote;
      })
      })
  }

//Método de editar
onEdit(cenote: Cenote) {
  this.cenoteService.formData = Object.assign({}, cenote);
}
//Método de eliminar cenote
onDelete(id: string) {
  if(confirm("Are you sure to delete this record?")){
    this.firestore.doc('ccenotes/' + id).delete();

  }
}


}
