import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { APIService } from './API.service';
import { ITask } from '../shared/model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public subject: Subject<void> = new Subject();

  constructor(private api: APIService) {}

  get(): Observable<ITask[]> {
    return this.api.get('tasks');
  }
  set(data: ITask): Observable<ITask[]> {
    return this.api.set('tasks', data) as Observable<ITask[]>;
  }
}
