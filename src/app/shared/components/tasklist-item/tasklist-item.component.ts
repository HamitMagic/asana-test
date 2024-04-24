import { Component, Input, OnInit } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ITask } from '../../model/task.model';
import { TaskService } from '../../../services/task.service';
import { tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasklist-item',
  standalone: true,
  imports: [CdkAccordionModule, MatIconModule, MatTableModule, CommonModule],
  templateUrl: './tasklist-item.component.html',
  styleUrl: './tasklist-item.component.scss',
})
export class TasklistItemComponent implements OnInit {
  @Input() desk!: string;
  @Input() index: number = 0;
  public tasks: ITask[] = [];
  public displayedColumns: string[] = [
    'name',
    'created',
    'deadline',
    'status',
    'priority',
    'executors',
  ];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService
      .get()
      .subscribe(
        (allTasks) =>
          (this.tasks = allTasks.filter((task) => task.deskName === this.desk))
      );
  }
}
