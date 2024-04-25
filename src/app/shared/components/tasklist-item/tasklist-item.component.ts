import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ITask } from '../../model/task.model';
import { TaskService } from '../../../services/task.service';
import { CommonModule } from '@angular/common';
import { openDialogService } from '../../../services/openDialog.service';
import { TaskItemOverviewComponent } from '../task-item-overview/task-item-overview.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-tasklist-item',
  standalone: true,
  imports: [
    CdkAccordionModule,
    MatIconModule,
    MatButton,
    MatTableModule,
    CommonModule,
    TaskItemOverviewComponent,
  ],
  templateUrl: './tasklist-item.component.html',
  styleUrl: './tasklist-item.component.scss',
})
export class TasklistItemComponent implements OnInit {
  @Input() desk!: string;
  @Input() index: number = 0;
  @ViewChild('taskItem') taskItem!: TaskItemOverviewComponent;
  public tasks: ITask[] = [];
  public selectedTask: ITask = {} as ITask;
  public displayedColumns: string[] = [
    'name',
    'created',
    'deadline',
    'status',
    'priority',
    'executors',
  ];
  constructor(
    private taskService: TaskService,
    private openDialogService: openDialogService,
  ) {}

  ngOnInit(): void {
    this.taskService
      .get()
      .subscribe(
        (allTasks) =>
          (this.tasks = allTasks.filter((task) => task.deskName === this.desk))
      );
  }

  handleClick(desk: string) {
    this.openDialogService.openDialog('task', desk);
  }

  openTask(task: ITask) {
    this.selectedTask = task;
    this.taskItem.onOpen();
  }
}
