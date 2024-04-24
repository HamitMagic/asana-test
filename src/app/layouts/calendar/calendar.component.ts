import { Component } from '@angular/core';
import { CalendarItemComponent } from '../../shared/components/calendar-item/calendar-item.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CalendarItemComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

}
