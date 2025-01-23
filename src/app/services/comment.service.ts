import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  comments: Comment[] = [];

  constructor() {
    this.getComments();
  }

  getComments() {
    fetch('http://localhost:3000/comments')
      .then((res) => res.json())
      .then((data: Comment[]) => {
        this.comments = data;
        // console.log('Service COMMENTS:', this.comments); // comments array is populated
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  postComment(newComment: any) {
    this.comments.push(newComment);

    const id = newComment.postId;

    fetch(`http://localhost:3000/comments?postId=${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    })
      // .then((res) => res.json())
      // .then((savedComment) => {
      //   console.log('Saved comment:', savedComment);
      // });
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}
