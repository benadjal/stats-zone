import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, of, tap } from 'rxjs';
import {ApiPlayerData, PlayerData, PlayersApiResponse, PlayerWithStatistics, Statistic, TopPlayer } from '../models/player.model';

@Injectable({ providedIn: 'root' })
export class PlayerApiService {
  private http = inject(HttpClient);
  private keyApi: string = '6299e7617bede55e9a5ee4d5f91a8cbd';
  private apiUrl = 'https://v3.football.api-sports.io';

  private topPlayersCache!: TopPlayer[];

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-rapidapi-key': this.keyApi,
      'x-rapidapi-host': 'v3.football.api-sports.io'
    });
  }

  getTopPlayers(): Observable<TopPlayer[]> {

    const cached = localStorage.getItem('topPlayers');

    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();

      if (now - timestamp < 86400000 * 3) { // Magic numbers
        this.topPlayersCache = data;
        return of(this.topPlayersCache)
      }
    }

    const topPlayersId: number[] = [1100, 521, 278, 154, 874]; // Modifier en plus propre car magic numbers

    const requests: Observable<PlayersApiResponse>[] = topPlayersId.map((id) =>
      this.http.get<PlayersApiResponse>(`${this.apiUrl}/players/`, {
        params: { id, season: 2023 },
        headers: this.getHeaders()
      })
    );

    return forkJoin(requests).pipe(
      map((responses: PlayersApiResponse[]) =>
        responses.map((player: PlayersApiResponse) => player.response[0] as PlayerWithStatistics)
      ),
      map((topPlayers: PlayerWithStatistics[]) => topPlayers.map((player: PlayerWithStatistics) => {
        return {
          playerData: player.player,
          goals: player.statistics.reduce((acc: number, current: Statistic) => {
            return acc + (current.goals?.total ?? 0);
          }, 0),
          assists: player.statistics.reduce((acc: number, current: Statistic) => {
            return acc + (current.goals?.assists ?? 0);
          }, 0),
          // rating: player.statistics.reduce((acc:number,current Statistic,) => {

          // })
        }
      })),
      tap((players: TopPlayer[]) => {
        this.topPlayersCache = players;
        localStorage.setItem(
          'topPlayers',
          JSON.stringify({ data: players, timestamp: Date.now() })
        );
      }),
      catchError((err) => {
        return of([]);
      })

    );
  }

  getPlayerProfil(playerId: number) {
    const key = `player_${playerId}`;
    const cached = localStorage.getItem(key);

    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < 86400000) {
        return of(data);
      }
    }

    return this.http.get<PlayersApiResponse>(`${this.apiUrl}/players/`, {
      params: { id: playerId, season : 2023 },
      headers: this.getHeaders()
    }).pipe(
      map((playerResponse: PlayersApiResponse) => playerResponse.response[0] as PlayerWithStatistics),
      tap((data) =>
        localStorage.setItem(
          key,
          JSON.stringify({ data, timestamp: Date.now() })
        )
      )
    );
  }

  searchPlayer(search : string) : Observable<PlayerData[]> {
    return this.http.get<PlayersApiResponse>(`${this.apiUrl}/players/profiles`,{
      params : {search : search},
      headers : this.getHeaders()
    }).pipe(
      map((playerResponse : PlayersApiResponse) => playerResponse.response as ApiPlayerData[]),
      map((players : ApiPlayerData[] ) => players.map((player) => player.player)),
      map((player : PlayerData[]) => player.filter((player) => player.age || player.firstname || player.lastname || player.nationality)),
    )
  }
}

