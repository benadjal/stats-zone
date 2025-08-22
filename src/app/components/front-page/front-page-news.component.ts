import { Component } from '@angular/core';
import { NewsFrontPage } from '../../models/front-page-news.model';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [CardModule,RouterModule],
  templateUrl: './front-page-news.component.html',
  styleUrl: './front-page-news.component.scss',
})
export class FrontPageComponent {
  newsFront: NewsFrontPage[] = [
    {
      icon: 'arrow_outward',
      text: 'Meilleurs buteurs',
      routerLink : "top-scorers"
    },

    {
      icon: 'stars',
      text: 'Top passeurs',
      routerLink : "top-assists"
    },

    {
      icon: 'search',
      text: 'Talents à suivre',
      routerLink : "/"
    },
  ];
}

  // items: MenuItems[] = [
  //   {
  //     label: 'Comparer des joueurs',
  //     routerLink: "/"
  //   },
  //   {
  //     label: 'Top buteurs',
  //     routerLink: "top-scorers"
  //   }, {
  //     label: 'Top passeurs',
  //     routerLink: "top-assists"
  //   },
  // ];
