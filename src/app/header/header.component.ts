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
    this._router.navigate(['industry-overview'])
  }
  companyProfile(): void {
    this._router.navigate(['company-profile'])
  }


  // start product
  bowls(): void {
    this._router.navigate(['bowls']);
  }

  traysAndPens(): void {
    this._router.navigate(['trays-and-pens'])
  }

  storage(): void {
    this._router.navigate(['storage'])
  }

  petAccessories(): void {
    this._router.navigate(['pet-accessories']);
  }

  cutlery(): void {
    this._router.navigate(['cutlery']);
  }

  servingTools(): void {
    this._router.navigate(['serving-tools']);
  }

  tongs(): void {
    this._router.navigate(['tongs']);
  }

  cruets(): void {
    this._router.navigate(['cruets']);
  }

  colandersAndStrainers(): void {
    this._router.navigate(['colanders-and-strainers']);
  }

  fruitAndBreadBaskets(): void {
    this._router.navigate(['fruit-and-bread-baskets']);
  }

  binsAndBuckets(): void {
    this._router.navigate(['bins-and-buckets']);
  }

  barAssortments(): void {
    this._router.navigate(['bar-assortments']);
  }

  kitchenTool(): void {
    this._router.navigate(['kitchen-tool']);
  }

  saladServers(): void {
    this._router.navigate(['salad-servers']);
  }

  utilities(): void {
    this._router.navigate(['utilities']);
  }

}
