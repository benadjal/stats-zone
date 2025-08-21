import { Component, inject } from '@angular/core';
import { SeasonSearchInput } from '../../components/season-search-input/season-search-input';
import { LeagueSearchInput } from "../../components/league-search-input/league-search-input";
import { LeagueInput, SeasonInput } from '../../models/inputs.model';
import { LeagueApi } from '../../services/league-api';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { PlayerWithStatistics } from '../../models/player.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-scorers-page',
  imports: [SeasonSearchInput, LeagueSearchInput, LeagueSearchInput, AsyncPipe, JsonPipe],
  templateUrl: './top-scorers-page.html',
  styleUrl: './top-scorers-page.scss'
})
export class TopScorersPage {
  leagueService = inject(LeagueApi);

  topScorers$ : Observable<PlayerWithStatistics[]> = this.leagueService.getLeagueTopScorers();

  leagueSelected(event: LeagueInput) {
    this.leagueService.selectNewLeague(event);
  }

  seasonSelected(event: SeasonInput) {
    this.leagueService.selectNewSeason(event);
  }

}
