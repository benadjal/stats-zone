import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Player } from '../../models/player.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

export interface PlayerSelection {
  player: Player;
  mode: SearchBarMode
}

export type SearchBarMode = 'search' | 'comparePlayerOne' | 'comparePlayerTwo'

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule, AsyncPipe,InputTextModule,FloatLabelModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  playerService = inject(PlayersService);

  router = inject(Router);

  @Input() mode: 'search' | 'comparePlayerOne' | 'comparePlayerTwo' = 'search';

  @Output() playerSelected = new EventEmitter<PlayerSelection>();

  searchForm = new FormGroup({
    search: new FormControl('', {nonNullable: true, validators: Validators.required}),
  });

  filtredPlayers$: Observable<Player[]> = this.searchForm.controls.search.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((search) => this.playerService.getFilteredPlayers(search)),
  );

  selectPlayer(player: Player): void {
    if (this.mode === 'search') {
      this.searchForm.controls.search.reset();
      this.router.navigate(['player-detail', player.id]);
    } else {
      this.playerSelected.emit({ player: player, mode: this.mode });
    }
  }
}
