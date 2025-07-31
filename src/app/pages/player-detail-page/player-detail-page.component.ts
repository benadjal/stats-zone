import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { Observable, switchMap } from 'rxjs';
import { Player } from '../../models/player.model';
import { AsyncPipe, DatePipe } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-player-detail-page',
  standalone: true,
  imports: [AsyncPipe,SearchBarComponent, DatePipe],
  templateUrl: './player-detail-page.component.html',
  styleUrl: './player-detail-page.component.scss'
})
export class PlayerDetailPageComponent {

  router = inject(ActivatedRoute);
  playerService = inject(PlayersService);

  player$ : Observable<Player> = this.router.params.pipe(
    switchMap((params) => this.playerService.getPlayerById(+params['id']))
  );

}
