import { SearchInputComponent } from '../search-input/search-input.component';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SidenavService } from '../../../services/sidenav.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { DeskService } from '../../../services/desk.service';
import { tap } from 'rxjs';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    SearchInputComponent,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    public sidenavService: SidenavService,
    public dialog: MatDialog,
    private deskService: DeskService,
    private taskService: TaskService,
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
          this.deskService
            .set(result)
            .pipe(tap(() => this.deskService.subject.next()))
            .subscribe();
          break;
        case 'task':
          this.taskService
            .set(result)
            .pipe(tap(() => this.taskService.subject.next()))
            .subscribe();
          break;
      }
    });
  }
}
