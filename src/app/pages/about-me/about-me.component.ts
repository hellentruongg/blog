import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-about-me',
  imports: [FormsModule, ContactFormComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {}
