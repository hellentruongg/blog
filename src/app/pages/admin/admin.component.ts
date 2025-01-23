import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { PostFormComponent } from '../../components/post-form/post-form.component';

@Component({
  selector: 'app-admin',
  imports: [PostFormComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private formService: FormService) {}

  get form() {
    return this.formService.isVisible;
  }
}
