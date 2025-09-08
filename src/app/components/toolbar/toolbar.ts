import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

export interface MenuItems {
  label: string;
  icon?: string;
  routerLink?: string,
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

  checked: boolean = false;

  isMobile = window.innerWidth <= 960;

  items: MenuItem[] = [];

  @HostListener('window:resize')
  onResize() {
    const isMobile = window.innerWidth <= 960;
    const changerTheme = this.items.find(i => i.label === 'Changer de thème');
    if (changerTheme) changerTheme.visible = isMobile;
  }

  ngOnInit() {
    this.items = [
      { label: 'Top buteurs', routerLink: "top-scorers" },
      { label: 'Top passeurs', routerLink: "top-assists" },
      { label: 'Les plus sanctionnés', routerLink: "most-carded" },
      {
        label: 'Changer de thème',
        command: () => this.toggleDarkMode(),
        visible: window.innerWidth <= 960   // init
      }
    ];
  }



  toggleDarkMode() {
    const element = document.querySelector('html');
    element!.classList.toggle('app-dark');
  }

  displaly() {
    console.log("ok")
  }
}
