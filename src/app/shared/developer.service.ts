import { Injectable } from '@angular/core';
import {Developer} from './developer.model';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  formData: Developer;

  constructor() { }
}
