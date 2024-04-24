import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardItemComponent } from '../../shared/components/dashboard-item/dashboard-item.component';
import { DeskService } from '../../services/desk.service';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashboardItemComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  public desks!: string[];

  constructor(private deskService: DeskService) {
    try {
      this.deskService.get().pipe(tap(res => this.desks = res)).subscribe()
    } catch (error) {
      console.error(error)      
    }
  }

  ngOnInit(): void {
    try {
    this.deskService.subject
      .pipe(tap(() => (this.deskService
        .get()
        .pipe(tap((res) => (this.desks = res)))
      )));
    } catch (error) {
      console.error(error)
    }
  }

  ngOnDestroy(): void {
    
  }
}
