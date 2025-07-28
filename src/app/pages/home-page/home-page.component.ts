import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { TopPlayersComponent } from '../../components/top-players/top-players.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchBarComponent,TopPlayersComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
