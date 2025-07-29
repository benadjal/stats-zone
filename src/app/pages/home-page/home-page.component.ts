import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { TopPlayersComponent } from '../../components/top-players/top-players.component';
import { FrontPageComponent } from '../../components/front-page/front-page-news.component';
import { CompareStatsComponent } from '../../components/compare-stats/compare-stats.component';
import { Player } from '../../models/player.model';
import { topPlayersMock } from '../../mocks/topPlayers.mock';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchBarComponent,TopPlayersComponent, FrontPageComponent,CompareStatsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  playerList : Player[] = topPlayersMock;

}
