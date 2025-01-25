import { Component, Input } from '@angular/core';
import { CommentService } from '../../services/comment.service';
import { CommentItemComponent } from '../comment-item/comment-item.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'comments',
  imports: [CommentItemComponent, CommentFormComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  @Input()
  postId: number | null = null;

  constructor(private commentService: CommentService) {}

  get comments() {
    return this.commentService.comments.filter(
      (comment) => comment.postId === this.postId
    );
  }

  addComment(newComment: any) {
    this.commentService.postComment(newComment);
  }
}
