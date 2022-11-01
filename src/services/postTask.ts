import { Server } from '@/constants';

import { Task } from '@/models';

export const postTask = async (task: Task, token?: string): Promise<Task[]> => {
	if (token) {
		const response = await fetch(`${Server.Url}/tasks`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token
			},
			body: JSON.stringify(task)
		});

		const data = await response.json();

		return data;
	}
	return [];
};
