import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../service/crud.service';
import { SharedService } from '../service/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList: any
  imaUrl: any
  productName: any
  categoryList:any
  constructor(
    private _router: Router,
    private _sharedRoute: ActivatedRoute,
    private _crud: CrudService,
    private _shared: SharedService,
    private _dialog: MatDialog
  ) {
    this._shared.img_url.subscribe(
      (res: string) => {
        this.imaUrl = res;
        console.log(this.imaUrl, 'img');
      }
    )
  }

  ngOnInit(): void {
    this.getCategary();
    this._sharedRoute.paramMap.subscribe(params => {
      const catId = params.get('id');
      console.log('Received catId:', catId);
      this.getProduct(catId);
    });
  }

  getProduct(catId: any): void {
    this._crud.getProducts(catId).subscribe(
      (res: any) => {
        console.log('Product list:', res.data);
        this.productName = res?.data[0]?.pcate_name;
        this.productList = res.data;
        console.log(this.productName, 'productName');

      });
  }

  getCategary() {
    this._crud.getCategory().subscribe(
      (res: any) => {
        console.log(res, 'category');
        if (res.status === true) {
          this.categoryList = res.data.slice(0, 8)
          console.log(this.categoryList);
        }
      });
  }

  onCat(catId: any) {
    console.log(catId, 'set id');
    this._router.navigate(['product', catId?.id]);
  }

  openImageDialog(product: any): void {
    this._dialog.open(ProductDetailsComponent, {
      data: {
        imageUrl: product?.imageUrl ? this.imaUrl + product?.imageUrl : '../../assets/img/about.png',
        productname: product?.productname,
        productcode: product?.productcode,
        productsize: product?.productsize,
        productdesc: product?.productdesc,
      },
      panelClass: 'custom-dialog-container'
    });
  }

  // start product
  categories(): boolean {
    return this._router.isActive('categories', true);
  }
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
