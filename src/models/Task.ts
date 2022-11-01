import { TaskHistory } from '@/models';

export interface Task {
	id: number;
	name: string;
	description: string;
	history: TaskHistory[];
}
