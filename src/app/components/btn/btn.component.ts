import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'btn',
  imports: [FontAwesomeModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css',
})
export class BtnComponent {
  @Input()
  text: string = '';

  @Output() onEmitClick = new EventEmitter();

  emitClick() {
    this.onEmitClick.emit();
  }
}
