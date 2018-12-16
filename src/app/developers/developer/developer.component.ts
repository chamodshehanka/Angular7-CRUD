import { Component, OnInit } from '@angular/core';
import {DeveloperService} from '../../shared/developer.service';
import {NgForm} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor(private service: DeveloperService,
              private firestore: AngularFirestore,
              private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: null,
      name: '',
      position: '',
      mobile: ''
    };
  }

  onSubmit(form: NgForm) {
    const data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null) {
      this.firestore.collection('developers').add(data);
    } else {
      this.firestore.doc('developers/' + form.value.id).update(data);
    }
    this.resetForm(form);
    this.toastr.success('Developer Added Successfully!', 'Developer Register');
  }
}
