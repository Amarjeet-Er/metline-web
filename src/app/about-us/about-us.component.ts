import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  constructor(
    private _router: Router
  ) {

  }
  ngOnInit(): void {
    AOS.init({
      duration: 2000,
      once: true
    });
  }
  industryOverview(): boolean {
    return this._router.isActive('/industry-overview', true);
  }
  companyProfile(): boolean {
    return this._router.isActive('/company-profile', true);
  }
}
