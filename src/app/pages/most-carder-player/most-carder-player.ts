import { Component, inject } from '@angular/core';
import { SeasonSearchInput } from '../../components/season-search-input/season-search-input';
import { LeagueSearchInput } from '../../components/league-search-input/league-search-input';
import { LeagueApi } from '../../services/league-api';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { Card, LeagueInput, SeasonInput } from '../../models/inputs.model';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { tap } from 'rxjs';
import { CardColorInput } from '../../components/card-color-input/card-color-input';

@Component({
  selector: 'app-most-carder-player',
  imports: [SeasonSearchInput, LeagueSearchInput, TableModule, BadgeModule, AsyncPipe, CardColorInput],
  templateUrl: './most-carder-player.html',
  styleUrl: './most-carder-player.scss'
})
export class MostCarderPlayer {

  leagueService = inject(LeagueApi);

  mostCarded$ = this.leagueService.getMostCardedPlayer()


  leagueSelected(event: LeagueInput) {
    this.leagueService.selectNewLeague(event);
  }

  seasonSelected(event: SeasonInput) {
    this.leagueService.selectNewSeason(event);
  }

  cardColorSelected(event: Card) {
    this.leagueService.selectNewCardColor(event)
  }

}
