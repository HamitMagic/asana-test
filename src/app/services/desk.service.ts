import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { APIService } from './API.service';

@Injectable({
  providedIn: 'root',
})
export class DeskService {
  public subject: Subject<void> = new Subject();

  constructor(private api: APIService) {}

  get(): Observable<string[]> {
    return this.api.get('desks');
  }
  set(data: string): Observable<string[]> {
    return this.api.set('desks', data) as Observable<string[]>;
  }
}
