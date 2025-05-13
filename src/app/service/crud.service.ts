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

  getCategory() {
    return this._https.get(`${this.base_url}Productcategory`)
  }
  getProducts(catId: any) {
    return this._https.get(`${this.base_url}ProductListByCateId?productCateId=${catId}`)
  }

  addEnquiry(data: any) {
    return this._https.post(`${this.base_url}SubmitEnquiry`, data)
  }
}
