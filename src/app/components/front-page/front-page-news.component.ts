import { Component } from '@angular/core';
import { NewsFrontPage } from '../../models/front-page-news.model';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [],
  templateUrl: './front-page-news.component.html',
  styleUrl: './front-page-news.component.scss'
})
export class FrontPageComponent {
  newsFront: NewsFrontPage[] = [
    {
      icon: "arrow_outward",
      text: "Tops buteurs de la semaine"
    },

    {
      icon: "stars",
      text: "Performences exceptionnelles"
    },

    {
      icon: "search",
      text: "Nouveaux talents à suivre"
    }
  ]
}
