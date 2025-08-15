import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  // getTopPlayers(): Observable<Player[]> { 
  //   return of(topPlayersMock);
  // }

  // getFilteredPlayers(search: string): Observable<Player[]> {
  //   const normalizedSearch = search.toLocaleLowerCase();
  //   let matchingPlayers = allPlayers.filter((player) =>
  //     this.matchesNameOrLastName(player, normalizedSearch),
  //   );
  //   return of(matchingPlayers);
  // }

  // private matchesNameOrLastName(player: Player, search: string): boolean {
  //   if (!search) return false;
  //   return (
  //     player.name.toLowerCase().includes(search) ||
  //     player.lastName.toLocaleLowerCase().includes(search)
  //   );
  // }

  // getPlayerById(id: number): Observable<Player> {
  //   const matchingPlayer = allPlayers.find(
  //     (player: Player) => player.id === id,
  //   );
  //   if (!matchingPlayer) {
  //     throw new Error(`Player with id ${id} not found`);
  //   }
  //   return of(matchingPlayer);
  // }


  // getNumberOfGoals(player) {
  //   player.map
  // }
}
