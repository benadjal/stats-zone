import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayerDetailPageComponent } from './pages/player-detail-page/player-detail-page.component';
import { TopScorersPage } from './pages/top-scorers-page/top-scorers-page';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'player-detail/:id', component: PlayerDetailPageComponent },
  { path: 'top-scorers', component: TopScorersPage }
];
