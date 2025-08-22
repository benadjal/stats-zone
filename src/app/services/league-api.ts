import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of, switchMap, tap, timestamp } from 'rxjs';
import { LeagueInput, Season, SeasonInput } from '../models/inputs.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlayersApiResponse, PlayerWithStatistics } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueApi {

  http = inject(HttpClient);

  topScorersCache: PlayerWithStatistics[] = [];

  defaultSeason: SeasonInput = { year: 2023 };
  defaultLeague: LeagueInput = { id: 39, name: "Premier league" };


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


  getLeagueTopScorers(): Observable<PlayerWithStatistics[]> {
    return combineLatest([this.leagueSeason$$, this.leagueName$$]).pipe(
      switchMap(([leagueSeason, leagueName]) => {
        const key = `topScorers-${leagueName.name}-${leagueSeason.year}`;
        const cachedTopScorers = localStorage.getItem(key);

        if (cachedTopScorers) {
          const { data, timestamp } = JSON.parse(cachedTopScorers);
          if (Date.now() - timestamp < 86400000) {
            return of(data);
          }
        }

        return this.http.get<PlayersApiResponse>(`${this.apiUrl}/players/topscorers`, {
          headers: this.getHeaders(),
          params: { season: leagueSeason.year, league: leagueName.id }
        }).pipe(
          map(res => res.response as PlayerWithStatistics[]),
          tap(data => localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() })))
        );
      })
    );
  }


  getLeagueTopAssists(): Observable<PlayerWithStatistics[]> {
    return combineLatest([this.leagueSeason$$, this.leagueName$$]).pipe(
      switchMap(([leagueSeason, leagueName]) => {
        const key = `topAssists-${leagueName.name}-${leagueSeason.year}`;

        const cachedTopAssists = localStorage.getItem(key);

        if (cachedTopAssists) {
          const { data, timestamp } = JSON.parse(cachedTopAssists);
          if (Date.now() - timestamp < 86400000) {
            return of(data);
          }
        }

        return this.http.get<PlayersApiResponse>(this.apiUrl + "/players/topassists", {
          headers: this.getHeaders(),
          params: { season: leagueSeason.year, league: leagueName.id }
        }).pipe(
          map((topAssists) => topAssists.response as PlayerWithStatistics[]),
          tap((data) => localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() })))
        );
      })
    )
  }

}
