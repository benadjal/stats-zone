import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Card } from '../../models/inputs.model';

@Component({
  selector: 'app-card-color-input',
  imports: [ReactiveFormsModule, SelectModule],
  templateUrl: './card-color-input.html',
  styleUrl: './card-color-input.scss'
})
export class CardColorInput {

  @Output() colorCard = new EventEmitter();

  cardColorsSelection : Card[] = ["red", "yellow"];
  

  cardForm = new FormGroup({
    color: new FormControl('yellow')
  })


  selectedColor(cardColor : string) {
    this.colorCard.emit(cardColor);
  }



}
