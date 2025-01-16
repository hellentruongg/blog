import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { CommentItemComponent } from '../../components/comment-item/comment-item.component';
import { CommentFormComponent } from '../../components/comment-form/comment-form.component';

@Component({
  selector: 'app-post-details',
  imports: [
    DatePipe,
    RouterLink,
    FontAwesomeModule,
    CommentItemComponent,
    CommentFormComponent,
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  postId: number | null = null;
  post: Post | undefined;
  likes: number = 0;
  dislikes: number = 0;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faComment = faComment;

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
        // this.getPost();
        this.post = this.getPost();
        this.likes = this.getPostLikes();
        this.dislikes = this.getPostDislikes();
      }
    });
  }

  getPost(): Post | undefined {
    const post = this.postService.posts.find((post) => post.id === this.postId);
    return post;
  }

  getPostLikes(): number {
    return this.post?.likes ?? 0; // if post is undefined, likes will be set to 0 (just to prevent the runtime error)
  }

  getPostDislikes(): number {
    return this.post?.dislikes ?? 0;
  }

  likePost(): void {
    this.likes++;
    console.log(this.likes);
  }

  dislikePost(): void {
    this.dislikes++;
    console.log(this.dislikes);
  }
}
