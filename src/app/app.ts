import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompareStatsComponent } from './components/compare-stats/compare-stats.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
