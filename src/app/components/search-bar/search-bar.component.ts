import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PlayerData } from '../../models/player.model';
import { FootballApiService } from '../../services/football-api.service';
import { debounceTime, distinctUntilChanged, filter, map, Observable, switchMap, tap } from 'rxjs';
import { AutoCompleteModule } from 'primeng/autocomplete';


export interface PlayerSelection {
  player: PlayerData;
  mode: SearchBarMode
}

export type SearchBarMode = 'search' | 'comparePlayerOne' | 'comparePlayerTwo'

@Component({
  selector: 'app-search-bar',
  imports: [ReactiveFormsModule, AsyncPipe,InputTextModule,FloatLabelModule,AutoCompleteModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  footballService = inject(FootballApiService);

  router = inject(Router);

  @Input() mode: 'search' | 'comparePlayerOne' | 'comparePlayerTwo' = 'search';

  @Output() playerSelected = new EventEmitter<PlayerSelection>();

  searchForm = new FormGroup({
    search: new FormControl('', {nonNullable: true, validators: Validators.required}),
  });

  filtredPlayers$: Observable<any> = this.searchForm.controls.search.valueChanges.pipe(
    tap((res) => console.log(res)),
    debounceTime(400),
    distinctUntilChanged(),
    filter((search) => typeof search === 'string'),
    switchMap((search) => this.footballService.searchPlayer(search)),
  );

  selectPlayer(player: PlayerData): void {
    if (this.mode === 'search') {
      this.searchForm.controls.search.reset();
      this.router.navigate(['player-detail', player.id]);
    } else {
      this.playerSelected.emit({ player: player, mode: this.mode });
    }
  }
}
