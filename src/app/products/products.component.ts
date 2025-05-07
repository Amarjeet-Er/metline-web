import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {


  constructor(private _router: Router) { }

  ngOnInit(): void {

  }



  // start product
  bowls(): boolean {
    return this._router.isActive('bowls', true);
  }

  traysAndPens(): boolean {
    return this._router.isActive('trays-and-pens', true);
  }

  storage(): boolean {
    return this._router.isActive('storage', true);
  }

  petAccessories(): boolean {
    return this._router.isActive('pet-accessories', true);;
  }

  cutlery(): boolean {
    return this._router.isActive('cutlery', true);;
  }

  servingTools(): boolean {
    return this._router.isActive('serving-tools', true);;
  }

  tongs(): boolean {
    return this._router.isActive('tongs', true);;
  }

  cruets(): boolean {
    return this._router.isActive('cruets', true);;
  }

  colandersAndStrainers(): boolean {
    return this._router.isActive('colanders-and-strainers', true);;
  }

  fruitAndBreadBaskets(): boolean {
    return this._router.isActive('fruit-and-bread-baskets', true);;
  }

  binsAndBuckets(): boolean {
    return this._router.isActive('bins-and-buckets', true);;
  }

  barAssortments(): boolean {
    return this._router.isActive('bar-assortments', true);;
  }

  kitchenTool(): boolean {
    return this._router.isActive('kitchen-tool', true);;
  }

  saladServers(): boolean {
    return this._router.isActive('salad-servers', true);;
  }

  utilities(): boolean {
    return this._router.isActive('utilities', true);;
  }
}
