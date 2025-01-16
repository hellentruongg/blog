import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];

  constructor() {
    fetch('http://localhost:3000/posts')
      .then((res) => res.json())
      .then((data: Post[]) => {
        this.posts = data.map((post: any) => {
          post.id = Number.parseInt(post.id);
          post.likes = Number.parseInt(post.likes);
          post.dislikes = Number.parseInt(post.dislikes);
          return post;
        });
      });
  }
}
