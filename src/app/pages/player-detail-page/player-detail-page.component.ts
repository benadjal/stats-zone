import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { Observable } from 'rxjs';
import { Player } from '../../models/player.model';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-player-detail-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './player-detail-page.component.html',
  styleUrl: './player-detail-page.component.scss'
})
export class PlayerDetailPageComponent {

  router = inject(ActivatedRoute);
  playerService = inject(PlayersService);

  id : number = +this.router.snapshot.params['id'];

  player$ : Observable<Player> = this.playerService.getPlayerById(this.id);
}
