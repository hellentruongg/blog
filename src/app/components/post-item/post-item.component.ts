import { Component, Input } from '@angular/core';
import { Post } from '../../models/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'post-item',
  imports: [RouterLink],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
})
export class PostItemComponent {
  @Input() post: Post = {} as any as Post;

  constructor() {}
}
