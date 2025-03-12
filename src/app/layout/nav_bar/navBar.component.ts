import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './navBar.component.html',
  styleUrl: './navBar.component.scss',
})
export class NavBarComponent {
  constructor(private router: Router) {}
  goTo(to: string) {
    this.router.navigate([to]);
  }
}
