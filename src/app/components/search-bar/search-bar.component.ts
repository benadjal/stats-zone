import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Player } from '../../models/player.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [NgStyle, ReactiveFormsModule, AsyncPipe],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Input() color: string = 'grey';

  @Input() mode: 'search' | 'comparePlayerOne' | 'comparePlayerTwo' = 'search';

  @Output() playerSelected = new EventEmitter();

  playerService = inject(PlayersService);

  router = inject(Router);

  searchForm: FormGroup = new FormGroup({
    search: new FormControl('', Validators.required)
  });

  filtredPlayers$: Observable<Player[]> = this.getPlayerList();

  getPlayerList(): Observable<Player[]> {
    return this.searchForm.get('search')!.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((search) => this.playerService.getFilteredPlayers(search))
    )
  }

  selectPlayer(player: Player): void {
    if (this.mode === 'search') {
      this.router.navigateByUrl('player-detail');
    }
    else {
      this.playerSelected.emit({ player: player, mode: this.mode });
    }
  }

}
