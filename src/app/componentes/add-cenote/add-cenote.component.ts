import { Component, OnInit } from '@angular/core';
import { CenoteService } from 'src/app/servicios/cenote.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cenote',
  templateUrl: './add-cenote.component.html',
  styleUrls: ['./add-cenote.component.css']
})
export class AddCenoteComponent implements OnInit {

  constructor(private cenoteService : CenoteService, private firestore : AngularFirestore) { }

  ngOnInit() {
    this.resetForm();
  }

  //Limpiar los datos
  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.cenoteService.formData = {
      id : null,
      name : '',
      manager : '',
      schedule : '',
      averagePeople : 0,
      location : '',
      image: '',
      service_1: '',
      service_2: '',
      service_3: '',
      service_4: '',
      service_5: '',
      price_1: 0,
      price_2: 0,
      price_3: 0,
      price_4: 0,
      price_5: 0


    }
  }

  //Método para agregar un cenote
  onSubmint(form: NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id == null)
     this.firestore.collection('cenotes').add(data);
    else
    this.firestore.doc('cenotes/' + form.value.id).update(data);
    this.resetForm(form);
  }

}
