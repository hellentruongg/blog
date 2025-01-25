import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';
import { CommentsComponent } from '../../components/comments/comments.component';

@Component({
  selector: 'app-post-details',
  imports: [DatePipe, RouterLink, FontAwesomeModule, CommentsComponent],
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
        this.post = this.getPost();
        this.likes = this.getPostLikes();
        this.dislikes = this.getPostDislikes();
      }
    });
  }

  getPost(): Post | undefined {
    const storedPost = localStorage.getItem('post');
    console.log(storedPost);

    if (storedPost) {
      return JSON.parse(storedPost);
    }

    const post = this.postService.posts.find((post) => post.id === this.postId);
    if (post) {
      localStorage.setItem('post', JSON.stringify(post));
    }
    return post;
  }

  getPostLikes(): number {
    const storedLikes = localStorage.getItem('likes');
    if (storedLikes !== null) {
      return JSON.parse(storedLikes);
    }

    return this.post?.likes ?? 0; // if post is undefined, likes will be set to 0 (just to prevent the runtime error)
  }

  getPostDislikes(): number {
    const storedDislikes = localStorage.getItem('dislikes');
    if (storedDislikes !== null) {
      return JSON.parse(storedDislikes);
    }

    return this.post?.dislikes ?? 0;
  }

  incrementLikes(): void {
    this.likes++;
    localStorage.setItem('likes', JSON.stringify(this.likes));
    console.log(this.likes);
  }

  incrementDislikes(): void {
    this.dislikes++;
    localStorage.setItem('dislikes', JSON.stringify(this.dislikes));
    console.log(this.dislikes);
  }
}
