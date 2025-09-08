import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, map, Observable, of, switchMap, tap, timestamp } from 'rxjs';
import { Card, LeagueInput, Season, SeasonInput } from '../models/inputs.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PlayersApiResponse, PlayerWithStatistics } from '../models/player.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueApi {

  http = inject(HttpClient);

  topScorersCache: PlayerWithStatistics[] = [];

  defaultSeason: SeasonInput = { year: 2023 };
  defaultLeague: LeagueInput = { id: 39, name: "Premier league" };
  defaultCardColor: Card = "yellow"

  defaultCard: Card = "yellow";


  leagueSeason$$: BehaviorSubject<SeasonInput> = new BehaviorSubject(this.defaultSeason);
  leagueName$$: BehaviorSubject<LeagueInput> = new BehaviorSubject(this.defaultLeague);
  cardColor$$: BehaviorSubject<Card> = new BehaviorSubject(this.defaultCard);

  
  apiUrl : string = environment.apiUrl

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-rapidapi-key': environment.keyApi,
      'x-rapidapi-host': this.apiUrl
    });
  }

  selectNewLeague(value: LeagueInput) {
    this.leagueName$$.next(value);
  }

  selectNewSeason(value: SeasonInput) {
    this.leagueSeason$$.next(value);
  }

  selectNewCardColor(value: Card) {
    this.cardColor$$.next(value);
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

  getMostCardedPlayer(): Observable<PlayerWithStatistics[]> {
    return combineLatest([this.leagueName$$, this.leagueSeason$$, this.cardColor$$]).pipe(
      switchMap(([league, season, cardColor]) => {
        const key = `top${cardColor}Cards-${league.name}-${season.year}`;
        const cached = localStorage.getItem(key);

        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 86400000 * 3) {
            return of(data);
          }
        }

        return this.http.get<PlayersApiResponse>(`${this.apiUrl}/players/top${cardColor}cards`, {
          headers: this.getHeaders(),
          params: { season: season.year, league: league.id }
        }).pipe(
          map(response => response.response as PlayerWithStatistics[]),
          tap(data => localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() })))
        );
      })
    );
  }

}
