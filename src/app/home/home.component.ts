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
      role: 'Engineer',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/about.png'
    },
    {
      name: 'Sukesh Doe',
      role: 'Angular Developer',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/about.png'
    },
    {
      name: 'Jane Smith',
      role: 'Designer',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/about.png'
    },
    {
      name: 'Mike Lee',
      role: 'Project Manager',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/about.png'
    },
    {
      name: 'Dinesh Ray',
      role: 'Manager',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/about.png'
    },
    {
      name: 'Chunchun Pandit',
      role: 'Dot Net Developer',
      message: 'The company has a wide range and ability to produce around 200 different products backed by in-house designing. The company is capable of producing steel houseware of any shape like round, oval, square, or any other shape.',
      avatar: '../../assets/img/about.png'
    }
  ];

  complianceLogos: string[] = [
  '../../assets/img/logo-1.jpg',
  '../../assets/img/logo-2.jpg',
  '../../assets/img/logo-3.jpg',
  // '../../assets/img/logo-4.jpg',
  '../../assets/img/logo-5.jpg',
];

}
