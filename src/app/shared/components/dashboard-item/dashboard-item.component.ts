import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [CdkAccordionModule, MatIconModule],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss',
})
export class DashboardItemComponent {
  @Input() desk: string = '';
  @Input() index: number = 0;

  constructor() {}
}
