import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/shared/route.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  constructor(private service: RouteService, 
    private firestore:AngularFirestore, 
    private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
    form.resetForm();
    this.service.formData = {
      id : null,
      name_route : '',
      cenote_name : '',
      cenote_input : '',
      cenote_services : '',
      cenote_schedule : '',
      how_to_get : '',
    }
  }

  onSubmit(form:NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id == null)
      this.firestore.collection('routes').add(data);
    else
      this.firestore.doc('routes/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted Successfully');
  }

}
