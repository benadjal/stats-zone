import { Component } from '@angular/core';
import { PlayerSelection, SearchBarComponent } from '../search-bar/search-bar.component';
import { Player } from '../../models/player.model';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from "primeng/button";

@Component({
  selector: 'app-compare-stats',
  imports: [SearchBarComponent, CardModule, DividerModule, ButtonModule],
  templateUrl: './stats-comparator.component.html',
  styleUrl: './stats-comparator.component.scss',
})
export class StatsComparatorComponent {
  playerOne?: Player;
  playerTwo?: Player;

  selectPlayer(playerSelection: PlayerSelection) {
    if (playerSelection.mode === 'comparePlayerOne') {
      this.playerOne = playerSelection.player;
    } else if (playerSelection.mode === 'comparePlayerTwo') {
      this.playerTwo = playerSelection.player;
    }
  }

  unSelectPlayer(firstOrSecondPlayer: 'playerOne' | 'playerTwo') {
    firstOrSecondPlayer === 'playerOne'
      ? (this.playerOne = undefined)
      : (this.playerTwo = undefined);
  }
}
