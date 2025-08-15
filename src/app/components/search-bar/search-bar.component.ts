import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlayersService } from '../../services/players.service';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PlayerData } from '../../models/player.model';

export interface PlayerSelection {
  player: PlayerData;
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

  // filtredPlayers$: Observable<Player[]> = this.searchForm.controls.search.valueChanges.pipe(
  //   debounceTime(300),
  //   distinctUntilChanged(),
  //   switchMap((search) => this.playerService.getFilteredPlayers(search)),
  // );

  selectPlayer(player: any): void {
    if (this.mode === 'search') {
      this.searchForm.controls.search.reset();
      this.router.navigate(['player-detail', player.id]);
    } else {
      this.playerSelected.emit({ player: player, mode: this.mode });
    }
  }
}
