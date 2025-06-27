import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  base_url = new BehaviorSubject<string>('https://www.metlinehouseware.com/Api/');
  img_url = new BehaviorSubject<string>('https://www.metlinehouseware.com/');
  constructor() {
    
   }
}
