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
    const data = form.value;
    this.firestore.collection('developers').add(data);
    this.resetForm(form);
    this.toastr.success('Developer Added Successfully!', 'Developer Register');
  }
}
