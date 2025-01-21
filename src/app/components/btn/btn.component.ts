import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn',
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css',
})
export class BtnComponent {
  @Input() text: string = '';
  @Output() onEmitClick = new EventEmitter();

  emitClick() {
    this.onEmitClick.emit();
  }
}
