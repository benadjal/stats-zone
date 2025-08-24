import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PlayerDetailPageComponent } from './pages/player-detail-page/player-detail-page.component';
import { TopScorersPage } from './pages/top-scorers-page/top-scorers-page';
import { TopAssistsPage } from './pages/top-assists/top-assists-page';
import { MostCarderPlayer } from './pages/most-carder-player/most-carder-player';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'player-detail/:id', component: PlayerDetailPageComponent },
  { path: 'top-scorers', component: TopScorersPage },
  { path: 'top-assists', component: TopAssistsPage },
  {path : 'most-carded', component : MostCarderPlayer}
];
