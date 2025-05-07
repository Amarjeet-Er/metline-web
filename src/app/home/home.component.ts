import { Component, ElementRef, ViewChild } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const videoEl = this.bgVideo.nativeElement;

    videoEl.muted = true; // Ensure muted for autoplay
    videoEl.play().catch(err => {
      console.warn('Autoplay failed:', err);
    });
  }

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
      once: true
    });
  }

}
