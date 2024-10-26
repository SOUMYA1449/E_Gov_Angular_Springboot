import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {
  images = [
    { src: 'assets/image/1-full.webp', alt: 'First slide' },
    { src: 'assets/image/2-full.webp', alt: 'Second slide' },
    { src: 'assets/image/3-full.webp', alt: 'Third slide' },
  ];
}
