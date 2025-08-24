import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

export interface MenuItems {
  label: string;
  icon?: string;
  routerLink: string,
  items?: MenuItems[]
}

@Component({
  selector: 'app-toolbar',
  imports: [Menubar,
    ToggleSwitchModule, FormsModule, ButtonModule, RouterModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})

export class Toolbar {


  items: MenuItems[] = [
    {
      label: 'Top buteurs',
      routerLink: "top-scorers"
    }, {
      label: 'Top passeurs',
      routerLink: "top-assists"
    },
      {
      label: 'Les plus sanctionnéss',
      routerLink: "most-carded"
    }
  ];


  checked: boolean = false;

  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('app-dark');
  }
}
