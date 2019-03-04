import { Component, OnInit } from '@angular/core';
import { RouteService } from 'src/app/shared/route.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Route } from 'src/app/shared/route.model';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
export class RouteListComponent implements OnInit {

  list: Route[];
  constructor(private service: RouteService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getRoutes().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Route;
      })
    })
  }

  onEdit(rou: Route) {
    this.service.formData = Object.assign({}, rou);
  }

  onDelete(id: string) {
    if(confirm("Are you sure to delete this record?")) {
      this.firestore.doc('routes/' + id).delete();
      this.toastr.warning('Deleted successcully');
    }
  }
}
