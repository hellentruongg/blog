import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'post-form',
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  base64: string = '';

  constructor(private postService: PostService) {}

  onSelectImage(event: any) {
    const file = event.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = (readerEvent: any) => {
      console.log(readerEvent.target.result.toString());
      this.base64 = readerEvent.target.result.toString();
    };

    fileReader.readAsDataURL(file);
  }

  onSubmit(form: NgForm) {
    const newPost = form.value;
    const postId = this.postService.posts.length + 1;
    const date = new Date(form.value.creationDate);
    const isoString = date.toISOString();

    newPost.id = postId;
    newPost.thumbnailUrl = this.base64;
    newPost.creationDate = isoString;
    newPost.likes = 0;
    newPost.dislikes = 0;

    this.postService.postPost(newPost);

    form.resetForm();
  }
}
