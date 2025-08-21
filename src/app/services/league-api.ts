import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, switchMap, tap } from 'rxjs';
import { LeagueInput, Season, SeasonInput } from '../models/inputs.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlayersApiResponse, PlayerWithStatistics } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueApi {
  defaultSeason: SeasonInput = { year: 2023 };
  defaultLeague: LeagueInput = { id: 39, name: "Premier league" };

  http = inject(HttpClient);

  leagueSeason$$: BehaviorSubject<SeasonInput> = new BehaviorSubject(this.defaultSeason);
  leagueName$$: BehaviorSubject<LeagueInput> = new BehaviorSubject(this.defaultLeague);

  private keyApi: string = '6299e7617bede55e9a5ee4d5f91a8cbd';
  private apiUrl = 'https://v3.football.api-sports.io';

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-rapidapi-key': this.keyApi,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    });
  }

  selectNewLeague(value: LeagueInput) {
    this.leagueName$$.next(value);
  }

  selectNewSeason(value: SeasonInput) {
    this.leagueSeason$$.next(value);
  }


  getLeagueTopScorers() : Observable<PlayerWithStatistics[]> {
    return combineLatest([this.leagueSeason$$, this.leagueName$$]).pipe(
      switchMap(([leagueSeason, leagueName]) => {
        return this.http.get<PlayersApiResponse>(this.apiUrl + "/players/topscorers", {
          headers : this.getHeaders(),
          params : {season : leagueSeason.year, league : leagueName.id}
        })
      }),
      map((topScorers) => topScorers.response as PlayerWithStatistics[] )
    )
  }

}
