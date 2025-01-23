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
  base64image: string = '';

  constructor(private postService: PostService) {}

  onImageUpload(event: any) {
    const file = event.target.files[0];

    const fileReader = new FileReader();

    fileReader.onload = (readerEvent: any) => {
      console.log(readerEvent.target.result.toString());
      this.base64image = readerEvent.target.result.toString();
    };

    fileReader.readAsDataURL(file);
  }

  onSubmit(form: NgForm) {
    console.log(form.value); // output of form.value.creationDate is 2025-01-22

    const newPost = form.value;

    const postId = this.postService.posts.length + 1;
    const date = new Date(form.value.creationDate); // converts the date string into a JavaScript Date object.
    const isoString = date.toISOString();

    newPost.id = postId;
    newPost.thumbnailUrl = this.base64image;
    newPost.creationDate = isoString;
    newPost.likes = 0;
    newPost.dislikes = 0;

    console.log(newPost);

    this.postService.postPost(newPost);

    // form.resetForm();
  }
}
