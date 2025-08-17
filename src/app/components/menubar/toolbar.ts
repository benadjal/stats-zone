import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Menubar } from 'primeng/menubar';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

export interface MenuItems {
  label: string;
  icon?: string;
  items?: MenuItems[]
}

@Component({
  selector: 'app-toolbar',
  imports: [Menubar,
    ToggleSwitchModule, FormsModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})

export class Toolbar {


  items: MenuItems[] = [
    {
      label: 'Comparer des joueurs',
    },
    {
      label: 'Top buteurs',
    }, {
      label: 'Top passeurs',
    },
  ];


  checked: boolean = false;
}
