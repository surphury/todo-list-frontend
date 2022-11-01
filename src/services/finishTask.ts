import { Server } from '@/constants';
import { Task } from '@/models';

export async function finishTask(taskId: number, token: string): Promise<Task> {
	const response = await fetch(`${Server.Url}/finish_task/${taskId}`, {
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
