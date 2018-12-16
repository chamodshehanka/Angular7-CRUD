import { Component, OnInit } from '@angular/core';
import {DeveloperService} from '../../shared/developer.service';
import {Developer} from '../../shared/developer.model';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  list: Developer[];
  constructor(private service: DeveloperService,
              private firestore: AngularFirestore,
              private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.service.getDevelopers().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()} as Developer;
      });
    });
  }

    onEdit(dev: Developer) {
        this.service.formData = Object.assign({}, dev);
    }

    onDelete(id: string) {
        if (confirm('Are you sure to delete this record?')) {
          this.firestore.doc('developers/' + id).delete();
          this.toastr.warning('Deleted Successfully', 'Dev register');
        }
    }
}
