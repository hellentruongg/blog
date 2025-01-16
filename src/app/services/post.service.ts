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
        // this.posts = data;
        this.posts = data.map((post: any) => {
          post.id = Number.parseInt(post.id);
          return post;
        });
        console.log(data);
      });
  }
}
