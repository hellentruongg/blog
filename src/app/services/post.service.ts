import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];

  constructor() {
    this.getPosts();
  }

  getPosts() {
    fetch('http://localhost:3000/posts')
      .then((res) => res.json())
      .then((data: Post[]) => {
        this.posts = data.map((post: any) => {
          post.id = Number.parseInt(post.id);
          return post;
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  postPost(newPost: any) {
    this.posts.push(newPost);

    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPost),
    })
      // .then((res) => res.json())
      // .then((savedPost) => {
      //   console.log('Saved post:', savedPost);
      // });
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
