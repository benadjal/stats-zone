import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TopPlayer } from '../../models/player.model';
import { AsyncPipe } from '@angular/common';
import { PlayerCardComponent } from '../player-card/player-card.component';
import { PlayerApiService } from '../../services/player-api.service';

@Component({
  selector: 'app-top-players',
  standalone: true,
  imports: [AsyncPipe, PlayerCardComponent],
  templateUrl: './top-player-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './top-player-list.component.scss',
})
export class TopPlayerListComponent {
  foorballService = inject(PlayerApiService);

  topPlayers$: Observable<TopPlayer[]> = this.foorballService.getTopPlayers();


}
