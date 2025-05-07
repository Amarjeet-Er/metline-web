import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  constructor(
    private _router: Router
  ) {

  }
  industryOverview(): boolean {
    return this._router.isActive('/industry-overview', true);
  }
  companyProfile(): boolean {
    return this._router.isActive('/company-profile', true);
  }
}
