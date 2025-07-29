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

  getFilteredPlayers(search : string) : Observable<Player[]> {
    const normalizedSearch = search.toLocaleLowerCase()
    let matchingPlayers = topPlayersMock.filter((player) => this.matchesNameOrLastName(player,normalizedSearch));
    return of(matchingPlayers);
  }

  private matchesNameOrLastName(player : Player, search : string) : boolean {
    if(!search) return false;
    return player.name.toLowerCase().includes(search) || player.lastName.toLocaleLowerCase().includes(search)
  }
}
