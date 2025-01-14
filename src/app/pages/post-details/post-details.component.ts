import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-details',
  imports: [DatePipe, RouterLink],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent {
  postId: number | null = null;
  post: Post | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id == null) {
        this.postId = null;
      } else {
        this.postId = Number.parseInt(id);
        this.getPost();
      }
    });
  }

  getPost(): void {
    const posts = this.postService.posts;
    console.log(posts);

    const post = posts.find((post) => post.id === this.postId);

    this.post = post;
    console.log(this.post);
  }
}
