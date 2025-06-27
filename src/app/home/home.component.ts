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
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/profile.jpg'
    },
    {
      name: 'Sukesh Doe',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/profile.jpg'
    },
    {
      name: 'Jane Smith',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/profile.jpg'
    },
    {
      name: 'Mike Lee',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/profile.jpg'
    },
    {
      name: 'Dinesh Ray',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/profile.jpg'
    },
    {
      name: 'Chunchun Pandit',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/profile.jpg'
    }
  ];

  complianceLogos: string[] = [
  '../../assets/img/ISO-9001.png',
  '../../assets/img/ISO-14001.png',
  '../../assets/img/BSCI.jpg',
  '../../assets/img/sedex.jpg',
];

}
