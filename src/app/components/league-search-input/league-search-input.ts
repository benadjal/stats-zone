import { Component, EventEmitter, inject, Output } from '@angular/core';
import { LeagueInput } from '../../models/inputs.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { LeagueApi } from '../../services/league-api';


@Component({
  selector: 'app-league-search-input',
  imports: [ReactiveFormsModule, SelectModule],
  templateUrl: './league-search-input.html',
  styleUrl: './league-search-input.scss'
})
export class LeagueSearchInput {

  @Output() leagueSelection: EventEmitter<LeagueInput> = new EventEmitter();

  leagueService = inject(LeagueApi);

  leagues: LeagueInput[] = [
    { id: 39, name: "Premier league" },
    { id: 140, name: "Liga" },
    { id: 61, name: "Ligue 1" },
    { id: 94, name: "Primeria Liga" },
    { id: 78, name: "Bundesliga" },
    { id: 135, name: "Serie A" },
  ];

  filtredLeagues: LeagueInput[] = [...this.leagues];

  searchLeagueForm = new FormGroup({
    leagueName: new FormControl(this.leagueService.leagueName$$.getValue())
  });
  
  selectedLeague(event: LeagueInput): void {
    this.leagueSelection.emit(event)
  }
}
