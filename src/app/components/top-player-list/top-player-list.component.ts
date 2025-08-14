import { Component, inject } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { Observable } from 'rxjs';
import { TopPlayer } from '../../models/player.model';
import { AsyncPipe } from '@angular/common';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { FootballApiService } from '../../services/football-api.service';

@Component({
  selector: 'app-top-players',
  standalone: true,
  imports: [AsyncPipe, PlayerCardComponent],
  templateUrl: './top-player-list.component.html',
  styleUrl: './top-player-list.component.scss',
})
export class TopPlayerListComponent {
  playerService = inject(PlayersService);
  foorballService = inject(FootballApiService);

  topPlayers$: Observable<TopPlayer[]> = this.foorballService.getTopPlayers();

}
