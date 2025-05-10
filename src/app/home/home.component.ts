import { Component, ElementRef, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;
// Group testimonials by 3 per slide
  groupedTestimonials: any = [];
  
  ngAfterViewInit() {
    const videoEl = this.bgVideo.nativeElement;

    videoEl.muted = true; // Ensure muted for autoplay
    videoEl.play().catch(err => {
      console.warn('Autoplay failed:', err);
    });
  }

  ngOnInit(): void {
    const groupSize = 3;
    for (let i = 0; i < this.testimonials.length; i += groupSize) {
      this.groupedTestimonials.push(this.testimonials.slice(i, i + groupSize));
    }
    AOS.init({
      duration: 2000,
      once: true
    });
  }


  testimonials = [
    { name: 'John Doe', role: 'Engineer', message: 'Awesome!', avatar: '../../assets/img/about.png' },
    { name: 'Jane Smith', role: 'Designer', message: 'Loved it!', avatar: '../../assets/img/about.png' },
    { name: 'Mike Lee', role: 'PM', message: 'Very useful.', avatar: '../../assets/img/about.png' },
    { name: 'Emily Ray', role: 'QA', message: 'Bug-free!', avatar: '../../assets/img/about.png' },
    { name: 'Chris Green', role: 'CTO', message: 'Superb!', avatar: '../../assets/img/about.png' },
    { name: 'Sara Kim', role: 'Data Scientist', message: 'Great insights.', avatar: '../../assets/img/about.png' }
  ];  


}
