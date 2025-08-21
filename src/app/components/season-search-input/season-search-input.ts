import { Component, EventEmitter, Output } from '@angular/core';
import { SeasonInput } from '../../models/inputs.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-season-search-input',
  imports: [ReactiveFormsModule, SelectModule],
  templateUrl: './season-search-input.html',
  styleUrl: './season-search-input.scss'
})
export class SeasonSearchInput {

  @Output() seasonSelection : EventEmitter<SeasonInput> = new EventEmitter()

  seasons : SeasonInput[] = [{year : 2021}, {year :  2022}, {year : 2023}];

  seasonForm = new FormGroup({
    year : new FormControl({year : 2023}, Validators.required)
  });

  selectedSeason(event : SeasonInput) {
    this.seasonSelection.emit(event);
  }
}
