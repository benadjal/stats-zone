import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItems } from './models/utils.model';
import { Toolbar } from "./components/toolbar/toolbar";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Toolbar
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
