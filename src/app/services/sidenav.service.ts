import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  public isSidenavShown: boolean = false;

  constructor() {}

  public setSidenavShown(state: boolean) {
    this.isSidenavShown = state;
  }

  public toggle() {
    this.isSidenavShown = !this.isSidenavShown;
  }
  public close() {
    this.isSidenavShown = false;
  }
  public open() {
    this.isSidenavShown = true;
  }
}
