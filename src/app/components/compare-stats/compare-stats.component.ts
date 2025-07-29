import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-compare-stats',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './compare-stats.component.html',
  styleUrl: './compare-stats.component.scss'
})
export class CompareStatsComponent {

}
