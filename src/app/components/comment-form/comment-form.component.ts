import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'comment-form',
  imports: [FormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent {
  @Input() postId: number | null = null;
  @Output() onAddComment: EventEmitter<any> = new EventEmitter();
  comment: string = '';

  constructor(private commentService: CommentService) {}

  onSubmit(): void {
    if (!this.comment) {
      alert('Vänligen skriv en kommentar');
    }

    const commentId = this.commentService.comments.length + 1;

    const newComment = {
      id: commentId,
      postId: this.postId,
      text: this.comment,
    };

    this.onAddComment.emit(newComment);

    this.comment = '';
  }
}
