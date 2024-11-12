import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutUsComponent } from "../about-us/about-us.component";
import { ImageCarouselComponent } from "../image-carousel/image-carousel.component";
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AboutUsComponent, ImageCarouselComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
