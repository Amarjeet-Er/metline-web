import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
  groupedTestimonials: any = [];

  constructor(
    private _crud: CrudService
  ) {

  }


  ngOnInit(): void {
    const groupSize = 3;
    for (let i = 0; i < this.testimonials.length; i += groupSize) {
      this.groupedTestimonials.push(this.testimonials.slice(i, i + groupSize));
    }
    AOS.init({
      duration: 1000,
      once: true
    });
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

}
