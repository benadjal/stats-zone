import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayerDetailPageComponent } from './pages/player-detail-page/player-detail-page.component';
import { TopScorersPage } from './pages/top-scorers-page/top-scorers-page';
import { TopAssistsPage } from './pages/top-assists/top-assists-page';
import { MostCarderPlayer } from './pages/most-carder-player/most-carder-player';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'player-detail/:id',
    loadComponent: () =>
      import('./pages/player-detail-page/player-detail-page.component')
        .then(m => m.PlayerDetailPageComponent)
  },
  {
    path: 'top-scorers',
    loadComponent: () =>
      import('./pages/top-scorers-page/top-scorers-page')
        .then(m => m.TopScorersPage)
  },
  {
    path: 'top-assists',
    loadComponent: () =>
      import('./pages/top-assists/top-assists-page')
        .then(m => m.TopAssistsPage)
  },
  {
    path: 'most-carded',
    loadComponent: () =>
      import('./pages/most-carder-player/most-carder-player')
        .then(m => m.MostCarderPlayer)
  }
];
