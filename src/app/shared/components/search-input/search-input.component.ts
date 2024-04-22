import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule, MatIconModule, ],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  @Input() placeholder: string = '';
  @Output() valueChange = new EventEmitter<string>();
  @Input() public searchText: string = '';

  clear() {
    this.searchText = '';
    this.valueChange.emit(this.searchText);
  }
}
