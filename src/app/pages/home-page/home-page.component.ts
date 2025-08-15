import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { TopPlayerListComponent } from '../../components/top-player-list/top-player-list.component';
import { FrontPageComponent } from '../../components/front-page/front-page-news.component';
import { StatsComparatorComponent } from '../../components/stats-comparator/stats-comparator.component';
import { topPlayersMock } from '../../mocks/topPlayers.mock';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SearchBarComponent,
    TopPlayerListComponent,
    FrontPageComponent,
    StatsComparatorComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  // playerList: Player[] = topPlayersMock;
}
