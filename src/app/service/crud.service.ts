import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  base_url: string = ''
  constructor(
    private _https: HttpClient,
    private _shared: SharedService
  ) {
    this._shared.base_url.subscribe(
      (data) => {
        this.base_url = data;
        console.log(this.base_url, 'url');
        
      }
    )
  }
  get_data() {
    return this._https.get(`${this.base_url}/api/data`)
  }
}
