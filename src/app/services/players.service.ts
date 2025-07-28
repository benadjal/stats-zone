import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player } from '../models/player.model';
import { topPlayersMock } from '../mocks/topPlayers.mock';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  getTopPlayers(): Observable<Player[]> {
    return of(topPlayersMock)
  }
}
