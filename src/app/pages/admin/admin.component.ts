import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { PostFormComponent } from '../../components/post-form/post-form.component';

@Component({
  selector: 'app-admin',
  imports: [PostFormComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  constructor(private adminService: AdminService) {}

  get visible() {
    return this.adminService.isVisible;
  }
}
