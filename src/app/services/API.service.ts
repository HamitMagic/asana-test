import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { ITask } from '../shared/model/task.model';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor() {}

  get(title: string) {
    try {
      return of(JSON.parse(localStorage.getItem(title) || "[]"));
    } catch (error) {
      throw new Error();
    }
  }

  set(title: string, data: string | ITask) {
    if (!data) throw new Error('введены не корректные данные')
    try {
      return this.get(title).pipe(tap((res: string[] | ITask[]) => {
        const tmpData = [...res, data];
        localStorage.setItem(title, JSON.stringify(tmpData));
        return tmpData;
      }));
    } catch (error) {
      throw new Error();
    }
  }
  update(title: string, index: number, data: string | ITask) {
    return this.get(title).pipe(tap((res: string[] | ITask[]) => {
      try {
        res[index] = data;
        localStorage.setItem(title, JSON.stringify(res));
        return res;
      } catch (error) {
        throw new Error();        
      }
    }))
  }
}
