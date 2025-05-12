import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  base_url = new BehaviorSubject<string>('http://localhost:4200/home');
  constructor() {
    
   }
}
