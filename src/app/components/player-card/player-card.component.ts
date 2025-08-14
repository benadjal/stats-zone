import { Component, Input } from '@angular/core';
import { TopPlayer } from '../../models/player.model';
import { RouterLink } from '@angular/router';

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
  @Input() player!: TopPlayer;

  
}
