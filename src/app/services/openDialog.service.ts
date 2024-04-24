import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ModalWindowComponent } from '../shared/components/modal-window/modal-window.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from './task.service';
import { DeskService } from './desk.service';

@Injectable({
  providedIn: 'root',
})
export class openDialogService {

  constructor(
    private dialog: MatDialog,
    private taskService: TaskService,
		private deskService: DeskService,
  ) {}

  openDialog(type: string) {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      data: {
        type,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      switch (type) {
        case 'desk':
          this.deskService.set(result)
            .pipe(tap(() => this.deskService.subject.next()))
            .subscribe();
          break;
        case 'task':
          this.taskService.set(result)
            .pipe(tap(() => this.taskService.subject.next()))
            .subscribe();
          break;
      }
    });
  }
}
