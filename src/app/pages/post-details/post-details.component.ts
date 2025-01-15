import { Component, OnInit } from '@angular/core';
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
export class PostDetailsComponent implements OnInit {
  postId: number | null = null;
  post: Post | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
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

    // varför är id av datatypen string, borde vara nummer?
    const post = posts.find((post) => post.id == this.postId);
    console.log(post);

    this.post = post;
    console.log(this.post);
  }

  // get post(): Post | undefined {
  //   const posts = this.postService.posts;

  //   const post = posts.find((post) => post.id === this.postId);
  //   console.log(post);

  //   return post;
  // }
}
