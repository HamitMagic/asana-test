import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { APIService } from './API.service';
import { ITask } from '../shared/model/task.model';
import { DeskService } from './desk.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public subject: Subject<void> = new Subject();

  constructor(private api: APIService, private deskService: DeskService) {}

  get(): Observable<ITask[]> {
    return this.api.get('tasks');
  }

  set(data: ITask): Observable<ITask[]> {
    this.deskService.get()
      .pipe(tap((res) => {
        const index = res.indexOf(data.deskName);
        if (index === -1) {
          this.deskService.set(data.deskName)
            .subscribe(this.onSubscribe);
        } else {
          this.update(index, data).subscribe(this.onSubscribe);
        }
      })).subscribe();
    return this.api.set('tasks', {...data, created: new Date()}) as Observable<ITask[]>;
  }

  update(index: number, data: ITask) {
    return this.api.update('tasks', index, data) as Observable<ITask[]>;
  }

  private onSubscribe = () => {
    this.deskService.subject.next()
  }
}
