import { Component, Input } from '@angular/core';

@Component({
  selector: 'comment-item',
  imports: [],
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.css',
})
export class CommentItemComponent {
  @Input()
  comment: string = '';
}
