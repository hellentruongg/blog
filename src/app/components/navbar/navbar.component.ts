import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormService } from '../../services/form.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'navbar',
  imports: [RouterLink, BtnComponent, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isAdmin: boolean = false;
  faPlus = faPlus;

  constructor(private router: Router, private formService: FormService) {}

  toggleView() {
    if (!this.isAdmin) {
      this.isAdmin = true;
      this.router.navigate(['/admin']);
    } else {
      this.isAdmin = false;
      this.router.navigate(['/']);
    }
  }

  onToggleForm() {
    this.formService.toggleForm();
  }
}
