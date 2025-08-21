import { Component } from '@angular/core';
import { NewsFrontPage } from '../../models/front-page-news.model';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [CardModule],
  templateUrl: './front-page-news.component.html',
  styleUrl: './front-page-news.component.scss',
})
export class FrontPageComponent {
  newsFront: NewsFrontPage[] = [
    {
      icon: 'arrow_outward',
      text: 'Meilleurs buteurs',
    },

    {
      icon: 'stars',
      text: 'Top passeurs',
    },

    {
      icon: 'search',
      text: 'Talents à suivre',
    },
  ];
}
