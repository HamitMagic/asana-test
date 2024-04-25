import { Component, Input, ViewChild } from '@angular/core';
import { ITask } from '../../model/task.model';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../services/task.service';
import { IUser } from '../../model/user.model';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { STATUSES } from '../../model/consts';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-task-item-overview',
  standalone: true,
  imports: [
    MatButton,
    MatSidenavModule,
    MatIconModule,
    MatSelectModule,
    MatSidenav,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatMenuModule,
  ],
  templateUrl: './task-item-overview.component.html',
  styleUrl: './task-item-overview.component.scss',
})
export class TaskItemOverviewComponent {
  @Input() task!: ITask;
  @ViewChild('sideItem') sideItem!: MatSidenav;
  public statuses: string[] = Object.values(STATUSES) as string[];

  constructor(private taskService: TaskService) {}
  onClose() {
    this.sideItem.close();
  }
  onOpen() {
    this.sideItem.open();
  }
  handleClick() {
    alert('не успел реализовать логику выполнения задач');
  }
  addExecutor() {
    const name = prompt('введите имя');
    const email = prompt('введите почту');
    this.taskService
      .set({
        ...this.task,
        executors: [...this.task.executors, { name, email } as IUser],
      })
      .subscribe();
    alert('добавили исполнителя, проблемы с рендером');
  }
  setStatus() {
    this.taskService.set(this.task)
  }
  deleteTask() {
    this.taskService.delete(this.task);
  }
}
