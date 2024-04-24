import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasklist-item',
  standalone: true,
  imports: [],
  templateUrl: './tasklist-item.component.html',
  styleUrl: './tasklist-item.component.scss',
})
export class TasklistItemComponent {
  @Input() desk: string = '';

  constructor() {}
}
