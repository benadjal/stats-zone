import { Component, inject } from '@angular/core';
import { SeasonSearchInput } from '../../components/season-search-input/season-search-input';
import { LeagueSearchInput } from "../../components/league-search-input/league-search-input";
import { LeagueInput, SeasonInput } from '../../models/inputs.model';
import { LeagueApi } from '../../services/league-api';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { PlayerWithStatistics } from '../../models/player.model';
import { Observable } from 'rxjs';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
@Component({
  selector: 'app-top-assists-page',
  imports: [SeasonSearchInput, LeagueSearchInput, LeagueSearchInput, AsyncPipe, TableModule, BadgeModule],
  templateUrl: './top-assists-page.html',
  styleUrl: './top-assists-page.scss'
})
export class TopAssistsPage {
  leagueService = inject(LeagueApi);

  leagueSelected(event: LeagueInput) {
    this.leagueService.selectNewLeague(event);
  }

  seasonSelected(event: SeasonInput) {
    this.leagueService.selectNewSeason(event);
  }

  topAssists$: Observable<PlayerWithStatistics[]> = this.leagueService.getLeagueTopAssists();

  goalSeverity(player: PlayerWithStatistics) {
    const goalsNNumber = player.statistics[0].goals.assists
    if (goalsNNumber < 5) return 'danger';
    else if (goalsNNumber >= 5 && goalsNNumber <= 10) return 'warn';
    else return 'success';
  }

}
