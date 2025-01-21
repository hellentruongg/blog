import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'navbar',
  imports: [RouterLink, BtnComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isAdmin: boolean = false;

  constructor(private router: Router) {}

  toggleView() {
    if (!this.isAdmin) {
      this.isAdmin = true;
      this.router.navigate(['/admin']);
    } else {
      this.isAdmin = false;
      this.router.navigate(['/']);
    }
  }
}
