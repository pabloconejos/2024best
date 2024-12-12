import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-selector',
  standalone: true,
  imports: [],
  templateUrl: './text-selector.component.html',
  styleUrl: './text-selector.component.css'
})
export class TextSelectorComponent {
  @Input() text: string = '';
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  onTextMouseUp(): void {
    const selectedText = window.getSelection()?.toString();
    if (selectedText) {
      this.selectionChange.emit(selectedText);
    }
  }
}
