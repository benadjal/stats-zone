import { Component } from '@angular/core';
import { NewsFrontPage } from '../../models/front-page-news.model';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [CardModule, RouterModule],
  templateUrl: './front-page-news.component.html',
  styleUrl: './front-page-news.component.scss',
})
export class FrontPageComponent {
  newsFront: NewsFrontPage[] = [
    {
      icon: 'pi pi-arrow-up-right',
      text: 'Meilleurs buteurs',
      routerLink : "top-scorers"
    },

    {
      icon: 'pi pi-star',
      text: 'Top passeurs',
      routerLink : "top-assists"
    },

    {
      icon: 'pi pi-exclamation-circle',
      text: 'Les plus sanctionnés',
      routerLink : "most-carded"
    },
  ];
}
