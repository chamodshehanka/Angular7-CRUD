import { Component, OnInit } from '@angular/core';
import {DeveloperService} from '../../shared/developer.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  constructor(private service: DeveloperService) { }

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
}
