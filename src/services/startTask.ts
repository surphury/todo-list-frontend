import { Server } from '@/constants';

import { Task } from '@/models';

export async function startTask(taskId: number, token: string): Promise<Task> {
	const response = await fetch(`${Server.Url}/start_task/${taskId}`, {
		method: 'PATCH',
		headers: {
			Authorization: token,
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();

	console.log(data);

	return data;
}
