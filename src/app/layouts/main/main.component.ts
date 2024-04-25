import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ROUTE_CONSTANTS } from '../../shared/model/route-constants';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MediaMatcher } from '@angular/cdk/layout';
import { RouteConsts } from '../../shared/model/router.model';
import { SidenavService } from '../../services/sidenav.service';

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
export class MainComponent {
  public routeConstants = ROUTE_CONSTANTS;
  public isSideNavOpen = true;
  public mobileQuery: MediaQueryList;

  public fillerNav = Object.values(this.routeConstants).filter(
    (value) => typeof value !== 'string'
  ) as RouteConsts[];

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public sidenavService: SidenavService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    if (this.mobileQuery.matches) this.isSideNavOpen = false;
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.sidenavService.setSidenavShown(this.isSideNavOpen);
  }
}
