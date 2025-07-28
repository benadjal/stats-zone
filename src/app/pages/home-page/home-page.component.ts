import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
