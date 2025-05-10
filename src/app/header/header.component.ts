import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMobileMenuOpen = false;

  constructor(
    private _router: Router
  ) { }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
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


  // start product
  bowls(): void {
    this._router.navigate(['bowls']);
    this.isMobileMenuOpen = false;
  }

  traysAndPens(): void {
    this._router.navigate(['trays-and-pens']);
    this.isMobileMenuOpen = false;
  }

  storage(): void {
    this._router.navigate(['storage']);
    this.isMobileMenuOpen = false;
  }

  petAccessories(): void {
    this._router.navigate(['pet-accessories']);
    this.isMobileMenuOpen = false;
  }

  cutlery(): void {
    this._router.navigate(['cutlery']);
    this.isMobileMenuOpen = false;
  }

  servingTools(): void {
    this._router.navigate(['serving-tools']);
    this.isMobileMenuOpen = false;
  }

  tongs(): void {
    this._router.navigate(['tongs']);
    this.isMobileMenuOpen = false;
  }

  cruets(): void {
    this._router.navigate(['cruets']);
    this.isMobileMenuOpen = false;
  }

  colandersAndStrainers(): void {
    this._router.navigate(['colanders-and-strainers']);
    this.isMobileMenuOpen = false;
  }

  fruitAndBreadBaskets(): void {
    this._router.navigate(['fruit-and-bread-baskets']);
    this.isMobileMenuOpen = false;
  }

  binsAndBuckets(): void {
    this._router.navigate(['bins-and-buckets']);
    this.isMobileMenuOpen = false;
  }

  barAssortments(): void {
    this._router.navigate(['bar-assortments']);
    this.isMobileMenuOpen = false;
  }

  kitchenTool(): void {
    this._router.navigate(['kitchen-tool']);
    this.isMobileMenuOpen = false;
  }

  saladServers(): void {
    this._router.navigate(['salad-servers']);
    this.isMobileMenuOpen = false;
  }

  utilities(): void {
    this._router.navigate(['utilities']);
    this.isMobileMenuOpen = false;
  }

}
