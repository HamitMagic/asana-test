import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public showLoader: boolean = false;

  constructor() {}

  public show() {
    this.showLoader = true;
  }

  public hide() {
    this.showLoader = false;
  }
}
