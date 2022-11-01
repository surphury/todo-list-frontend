import { Server } from '@/constants';

import { Task } from '@/models';

export async function getTasks(token: string): Promise<Task[]> {
	const response = await fetch(`${Server.Url}/tasks`, {
		headers: {
			Authorization: token
		}
	});

	const data = await response.json();

	return data;
}
