import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ITask } from '../../model/task.model';
import { TaskService } from '../../../services/task.service';
import { CommonModule } from '@angular/common';
import { openDialogService } from '../../../services/openDialog.service';
import { MatButton } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SidenavService } from '../../../services/sidenav.service';

@Component({
  selector: 'app-tasklist-item',
  standalone: true,
  imports: [
    CdkAccordionModule,
    MatIconModule,
    MatTableModule,
    CommonModule,
    MatButton,
    MatSidenavModule,
  ],
  templateUrl: './tasklist-item.component.html',
  styleUrl: './tasklist-item.component.scss',
})
export class TasklistItemComponent implements OnInit {
  @ViewChild('sideItem') sideItem!: MatSidenav;
  @Input() desk!: string;
  @Input() index: number = 0;
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
    public sidenavService: SidenavService,
  ) {}

  ngOnInit(): void {
    this.taskService.get()
      .subscribe((allTasks) =>
        (this.tasks = allTasks.filter((task) => task.deskName === this.desk))
      );
  }

  handleClick(desk: string) {
    this.openDialogService.openDialog('task', desk);
  }

  openTask(task: ITask) {
    this.selectedTask = task;
    this.sideItem.open();
  }
}
