import { Injectable } from '@angular/core';
import {Developer} from './developer.model';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  formData: Developer;

  constructor(private firestore: AngularFirestore) { }

  getDevelopers() {
    return this.firestore.collection('developers').snapshotChanges();
  }
}
