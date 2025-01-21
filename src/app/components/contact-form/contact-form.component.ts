import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  // name: string = '';
  // email: string = '';
  // subject: string = '';
  // message: string = '';

  onSubmit(form: NgForm) {
    console.log(form.value);
    form.resetForm();
  }
}
