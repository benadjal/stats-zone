import { AsyncPipe, NgStyle } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Player } from '../../models/player.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, of, startWith, switchMap, tap } from 'rxjs';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [NgStyle, ReactiveFormsModule, AsyncPipe],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Input() color: string = 'grey';

  playerService = inject(PlayersService)

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

}
