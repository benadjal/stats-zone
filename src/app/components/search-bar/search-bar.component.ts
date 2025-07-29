import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  @Input() color : string = 'grey';

  @Input() filtredPlayers : Player[] = [];

}
