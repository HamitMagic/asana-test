import { STATUSES, PRIORITIES } from './consts';
import { IUser } from './user.model';

export interface ITask {
	name: string,
	created: Date,
	owner: IUser,
	deadline: Date,
	priority: typeof PRIORITIES,
	status: typeof STATUSES,
	executors: IUser[],
	deskName: string,
}