import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-compare-stats',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './compare-stats.component.html',
  styleUrl: './compare-stats.component.scss'
})
export class CompareStatsComponent {

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

  unSelectPlayer(firstOrSecondPlayer : 'playerOne' | 'playerTwo'){
    firstOrSecondPlayer === 'playerOne' ? this.isPlayerOneSelected = false : this.isPlayerTwoSelected = false
  }

}
