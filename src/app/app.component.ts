import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './layout/nav_bar/navBar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'quiz';
  goToUserList() {
    this.router.navigate(['/user-list']);
  }
}
