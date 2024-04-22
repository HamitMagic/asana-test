import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/model/route-constants';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  public routeConstants = ROUTE_CONSTANTS;
  public fillerNav = Object.entries(this.routeConstants);
  @ViewChild('snav') elementRef!: ElementRef;

  constructor(private router: Router) {
    console.log(this.elementRef)
  }

  ngOnInit(): void {
    console.log(this.elementRef)
  }
}
