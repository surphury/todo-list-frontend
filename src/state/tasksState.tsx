import create from 'zustand';

import { Task } from '@/models';

import {
	deleteTask,
	finishTask,
	getTasks,
	postTask,
	startTask
} from '@/services';

import { userState } from '@/state';

export const tasksState = create<{
	tasks: Task[];
	fetch: () => Promise<void>;
	remove: (id: number) => Promise<void>;
	add: (newTask: Task) => Promise<void>;
	finish: (id: number) => Promise<void>;
	start: (id: number) => Promise<void>;
}>((set, get) => ({
	tasks: [],
	fetch: async () => {
		const tasks = await getTasks(userState.getState().user?.token ?? '');
		set({ tasks: tasks });
	},

	start: async (id: number) => {
		const task = await startTask(
			id,
			userState.getState().user?.token ?? ''
		);

		const tasks = [...get().tasks];

		const index = tasks.findIndex((task) => task.id === id);

		tasks[index] = task;

		set({ tasks: tasks });
	},

	remove: async (id: number) => {
		/* Deleting the task from the database and then removing it from the state. */
		const res = await deleteTask(
			id,
			userState.getState().user?.token ?? ''
		);
		console.log(res);
		set({ tasks: get().tasks.filter((task) => task.id !== id) });
	},

	add: async (newTask: Task) => {
		const tasks = await postTask(newTask, userState.getState().user?.token);
		set({ tasks });
	},

	finish: async (id: number) => {
		const finishedTask = await finishTask(
			id,
			userState.getState().user?.token ?? ''
		);

		const tasks = [...get().tasks];
		const index = tasks.findIndex((task) => task.id === id);

		tasks[index] = finishedTask;

		set({ tasks: tasks });
	}
}));
