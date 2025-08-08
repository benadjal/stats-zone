import { Component, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { Router, RouterLink } from '@angular/router';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [RouterLink,CardModule,ButtonModule],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent {
  @Input() player!: Player;
}
