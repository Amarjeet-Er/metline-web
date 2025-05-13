import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMobileMenuOpen = false;
  categoryList: any

  constructor(
    private _router: Router,
    private _crud: CrudService
  ) {
    this.getCategary();
  }


  getCategary() {
    this._crud.getCategory().subscribe(
      (res: any) => {
        console.log(res, 'category');
        if (res.status === true) {
          this.categoryList = res.data
          console.log(this.categoryList);
        }
      });
  }

  onCat(catId: any) {
    console.log(catId, 'set id');
    this._router.navigate(['product', catId?.id]);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  
  toggleMobileClose() {
    this.isMobileMenuOpen = false;
  }

  // start about us
  industryOverview(): void {
    this._router.navigate(['industry-overview']);
    this.isMobileMenuOpen = false;
  }
  companyProfile(): void {
    this._router.navigate(['company-profile']);
    this.isMobileMenuOpen = false;
  }
}
