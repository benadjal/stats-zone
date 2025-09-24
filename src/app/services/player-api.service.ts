import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, of, tap } from 'rxjs';
import { ApiPlayerData, PlayerData, PlayersApiResponse, PlayerWithStatistics, Statistic, TopPlayer } from '../models/player.model';
import { environment } from "../../environments/environment";
import { CACHE_DURATION_MS, SEASON_2023 } from '../utils/constants/cache.constants';
import { TopPlayerId } from '../utils/constants/players.constants';

@Injectable({ providedIn: 'root' })
export class PlayerApiService {
  private http = inject(HttpClient);

  private topPlayersCache!: TopPlayer[];

  apiUrl : string = environment.apiUrl

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-rapidapi-key': environment.keyApi,
      'x-rapidapi-host': this.apiUrl
    });
  }

  getTopPlayers(): Observable<TopPlayer[]> {

    const cached = localStorage.getItem('topPlayers');

    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();

      if (now - timestamp < CACHE_DURATION_MS) { 
        this.topPlayersCache = data;
        return of(this.topPlayersCache)
      }
    }

    const topPlayersId: number[] = [TopPlayerId.Haaland, TopPlayerId.Lewandowski, TopPlayerId.Mbappe, TopPlayerId.Messi, TopPlayerId.CRonaldo];

    const requests: Observable<PlayersApiResponse>[] = topPlayersId.map((id) =>
      this.http.get<PlayersApiResponse>(`${this.apiUrl}/players/`, {
        params: { id, season: SEASON_2023 },
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
      if (Date.now() - timestamp < CACHE_DURATION_MS) {
        return of(data);
      }
    }

    return this.http.get<PlayersApiResponse>(`${this.apiUrl}/players/`, {
      params: { id: playerId, season: SEASON_2023 },
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

  searchPlayer(search: string): Observable<PlayerData[]> {
    return this.http.get<PlayersApiResponse>(`${this.apiUrl}/players/profiles`, {
      params: { search: search },
      headers: this.getHeaders()
    }).pipe(
      map((playerResponse: PlayersApiResponse) => playerResponse.response as ApiPlayerData[]),
      map((players: ApiPlayerData[]) => players.map((player) => player.player)),
      map((player: PlayerData[]) => player.filter((player) => player.age || player.firstname || player.lastname || player.nationality)),
    )
  }
}

