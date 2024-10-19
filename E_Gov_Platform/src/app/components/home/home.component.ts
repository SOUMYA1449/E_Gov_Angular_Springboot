import { Component } from '@angular/core';
import { ActivitiesComponent } from '../activities/activities.component';
import { NewsHighlightsComponent } from '../news-highlights/news-highlights.component';
import { InformationComponent } from '../information/information.component';
import { ScroolimageComponent } from "../scroolimage/scroolimage.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ActivitiesComponent, NewsHighlightsComponent, InformationComponent, ScroolimageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
