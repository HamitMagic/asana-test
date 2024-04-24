import { Component } from '@angular/core';
import { TasklistItemComponent } from '../../shared/components/tasklist-item/tasklist-item.component';
import { Observable, tap } from 'rxjs';
import { DeskService } from '../../services/desk.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TasklistItemComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  public desks!: Observable<string[]>;

  constructor(private deskService: DeskService) {
    try {
      this.desks = this.deskService.get();
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit(): void {
    try {
      this.deskService.subject
        .pipe(tap(() => (this.desks = this.deskService.get())))
        .subscribe();
    } catch (error) {
      console.error(error);
    }
  }
}
