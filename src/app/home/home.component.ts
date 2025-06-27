import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { CrudService } from '../service/crud.service';
import { SharedService } from '../service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  groupedTestimonials: any = [];
  categoryList: any;
  imaUrl: any;
  constructor(
    private _crud: CrudService,
    private _shared: SharedService,
    private _router: Router
  ) {
    this._shared.img_url.subscribe(
      (res: string) => {
        this.imaUrl = res;
        console.log(this.imaUrl, 'img');
      }
    )
  }


  ngOnInit(): void {
    const groupSize = 3;
    for (let i = 0; i < this.testimonials.length; i += groupSize) {
      this.groupedTestimonials.push(this.testimonials.slice(i, i + groupSize));
    }
    AOS.init({
      duration: 700,
      once: true
    });

    this.getCategary();
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

  ngAfterViewInit() {
    const videoEl = this.bgVideo.nativeElement;
    videoEl.playbackRate = 0.7;
    videoEl.muted = true;
    videoEl.play().catch(err => {
      console.warn('Autoplay failed:', err);
    });
  }


  testimonials = [
    {
      name: 'John Doe',
      message: `${"The structural steel provided by Metline Houseware  exceeded our expectations in terms of quality and compliance. Every shipment arrived on time, and the documentation was always in perfect order, which is crucial for our cross-border projects."}`,
      avatar: '../../assets/img/profile.jpg'
    },
    {
      name: 'Sukesh Doe',
      message: `${"Reliable, professional, and competitively priced – Metline Houseware has been a trusted partner in our projects across Asia and Europe. Their team understands the complexities of exporting and always delivers hassle-free service."}`,
      avatar: '../../assets/img/profile.jpg'
    },
    {
      name: 'Jane Smith',
      message: `${"We've been sourcing steel utensils  from Metline Houseware for over three years, and their consistency in quality and timely delivery has made them a critical part of our supply chain. Their customer service team is responsive and proactive, making international procurement feel seamless."}`,
      avatar: '../../assets/img/profile.jpg'
    },
  ];

  complianceLogos: string[] = [
    '../../assets/img/ISO-9001.png',
    '../../assets/img/ISO-14001.png',
    '../../assets/img/BSCI.jpg',
    '../../assets/img/sedex.jpg',
  ];

}
