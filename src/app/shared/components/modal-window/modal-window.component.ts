import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IDialogData } from '../../model/dialog.model';
import { MatButtonModule } from '@angular/material/button';
import { IUser } from '../../model/user.model';
import { FormsModule } from '@angular/forms';
import { STATUSES, PRIORITIES } from '../../model/consts';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-modal-window',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class ModalWindowComponent {
  public priorities: string[] = Object.values(PRIORITIES) as string[];
  public statuses: string[] = Object.values(STATUSES) as string[];
  public taskName: string = '';
  public taskOwner: IUser = { name: 'me', email: 'my@host.com' } as IUser;
  public taskDeadline!: Date;
  public taskPriority = '';
  public taskStatus = '';
  public taskDeskName = '';
  public deskName: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData) {}
  sendData() {
    if (this.data.type === 'desk') {
      return this.sendDeskData();
    } else if (this.data.type === 'task') {
      return this.sendTaskData();
    }
    return null;
  }

  private sendDeskData() {
    return this.deskName;
  }

  private sendTaskData() {
    return {
      deskName: this.taskDeskName,
      name: this.taskName,
      owner: this.taskOwner,
      deadline: this.taskDeadline,
      created: new Date(),
      priority: this.taskPriority,
      status: this.taskStatus,
      executors: [this.taskOwner],
    };
  }
}
