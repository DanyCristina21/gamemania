import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [ NgFor, NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  currentIndex: number = 0;
  images: string[] = [
    'assets/carousel.png',
    'assets/carousel1.png',
    'assets/carousel2.png',
    'assets/carousel3.png'
  ];

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  goToNext(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  goToPrev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
