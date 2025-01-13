import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post';
import { PostItemComponent } from '../post-item/post-item.component';

@Component({
  selector: 'posts',
  imports: [PostItemComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  constructor(private postService: PostService) {}

  get posts(): Post[] {
    return this.postService.posts;
  }
}
