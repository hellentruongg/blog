import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  isVisible: boolean = false;

  constructor() {}

  toggleForm() {
    this.isVisible = !this.isVisible;
  }
}
