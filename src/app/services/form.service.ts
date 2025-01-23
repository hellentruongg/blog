import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  isVisible: boolean = false;

  constructor() {}

  togglePostForm() {
    this.isVisible = !this.isVisible;
  }
}
