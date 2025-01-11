import { Component } from '@angular/core';
import { PostsComponent } from '../../components/posts/posts.component';

@Component({
  selector: 'home',
  imports: [PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
