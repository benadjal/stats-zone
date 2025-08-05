import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-compare-stats',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './stats-comparator.component.html',
  styleUrl: './stats-comparator.component.scss',
})
export class StatsComparatorComponent {
  isPlayerOneSelected: boolean = false;
  isPlayerTwoSelected: boolean = false;

  playerOne!: Player;
  playerTwo!: Player;

  selectPlayer($event: any) {
    if ($event.mode === 'comparePlayerOne') {
      this.isPlayerOneSelected = true;
      this.playerOne = $event.player;
    } else if ($event.mode === 'comparePlayerTwo') {
      this.isPlayerTwoSelected = true;
      this.playerTwo = $event.player;
    }
  }

  unSelectPlayer(firstOrSecondPlayer: 'playerOne' | 'playerTwo') {
    firstOrSecondPlayer === 'playerOne'
      ? (this.isPlayerOneSelected = false)
      : (this.isPlayerTwoSelected = false);
  }
}
