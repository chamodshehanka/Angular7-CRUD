import { Component, OnInit } from '@angular/core';
import {DeveloperService} from '../../shared/developer.service';
import {Developer} from '../../shared/developer.model';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css']
})
export class DeveloperListComponent implements OnInit {

  list: Developer[];
  constructor(private service: DeveloperService) { }

  ngOnInit() {
    this.service.getDevelopers().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()} as Developer;
      });
    });
  }

}
