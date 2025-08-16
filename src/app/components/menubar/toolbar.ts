import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Menubar } from 'primeng/menubar';
import { ToggleSwitch, ToggleSwitchModule } from 'primeng/toggleswitch';

export interface MenuItems {
  label: string;
  icon: string;
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
      label: 'Home',
      icon: 'pi pi-home'
    }
  ];

  checked: boolean = false;
}
