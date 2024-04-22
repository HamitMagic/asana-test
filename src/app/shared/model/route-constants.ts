import { RouteConsts } from './router.model';

export const ROUTE_CONSTANTS = {
  HOME: '',
  DEFAULT: '**',
  TASK_LIST: { route: 'task-list', name: 'Список' } as RouteConsts,
  DASHBOARD: { route: 'dashboard', name: 'Доска' } as RouteConsts,
  CALENDAR: { route: 'calendar', name: 'Календарь' } as RouteConsts,
};
