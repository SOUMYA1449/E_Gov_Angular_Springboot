import { Component } from '@angular/core';
import { ActivitiesComponent } from '../activities/activities.component';
import { NewsHighlightsComponent } from '../news-highlights/news-highlights.component';
import { InformationComponent } from '../information/information.component';
import { ScroolimageComponent } from "../scroolimage/scroolimage.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { AboutUsComponent } from "../about-us/about-us.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ActivitiesComponent, NewsHighlightsComponent, InformationComponent, ScroolimageComponent, RouterLink, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
