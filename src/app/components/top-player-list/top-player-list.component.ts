import { Component, inject } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Observable } from 'rxjs';
import { Player } from '../../models/player.model';
import { AsyncPipe } from '@angular/common';
import { PlayerCardComponent } from '../player-card/player-card.component';

@Component({
  selector: 'app-top-players',
  standalone: true,
  imports: [AsyncPipe, PlayerCardComponent],
  templateUrl: './top-player-list.component.html',
  styleUrl: './top-player-list.component.scss',
})
export class TopPlayerListComponent {
  playerService = inject(PlayersService);

  topPlayers$: Observable<Player[]> = this.playerService.getTopPlayers();
}
