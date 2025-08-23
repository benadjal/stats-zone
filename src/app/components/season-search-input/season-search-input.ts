import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SeasonInput } from '../../models/inputs.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { LeagueApi } from '../../services/league-api';

@Component({
  selector: 'app-season-search-input',
  imports: [ReactiveFormsModule, SelectModule],
  templateUrl: './season-search-input.html',
  styleUrl: './season-search-input.scss'
})
export class SeasonSearchInput {

  @Output() seasonSelection : EventEmitter<SeasonInput> = new EventEmitter()

  leagueService = inject(LeagueApi);

  seasons : SeasonInput[] = [{year : 2021}, {year :  2022}, {year : 2023}];

  seasonForm = new FormGroup({
    year : new FormControl(this.leagueService.leagueSeason$$.getValue())
  });
  
  selectedSeason(event : SeasonInput) {
    this.seasonSelection.emit(event);
  }
}
