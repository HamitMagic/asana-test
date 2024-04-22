import { Routes } from '@angular/router';
import { ROUTE_CONSTANTS } from './shared/model/route-constants';

export const routes: Routes = [
  {
    path: ROUTE_CONSTANTS.HOME,
    loadComponent: () =>
      import('./layouts/main/main.component').then((m) => m.MainComponent),
    children: [
      {
        path: ROUTE_CONSTANTS.TASK_LIST.route,
        loadComponent: () =>
          import('./layouts/taskList/task-list.component').then(
            (m) => m.TaskListComponent
          ),
      },
      {
        path: ROUTE_CONSTANTS.DASHBOARD.route,
        loadComponent: () =>
          import('./layouts/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: ROUTE_CONSTANTS.CALENDAR.route,
        loadComponent: () =>
          import('./layouts/calendar/calendar.component').then(
            (m) => m.CalendarComponent
          ),
      },
    ],
  },
  {
    path: ROUTE_CONSTANTS.DEFAULT,
    loadComponent: () =>
      import('./layouts/main/main.component').then((m) => m.MainComponent),
  },
];
