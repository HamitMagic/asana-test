import { Component } from '@angular/core';
import { ROUTE_CONSTANTS } from '../../model/route-constants';
import { Router } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.scss',
})
export class RedirectComponent {
  constructor(private router: Router) {
    router.navigate([ROUTE_CONSTANTS.HOME])
  }
}
