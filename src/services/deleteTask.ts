import { Server } from '@/constants';

export const deleteTask = async (
	taskId: number,
	token: string
): Promise<string> => {
	const response = await fetch(`${Server.Url}/tasks`, {
		method: 'DELETE',
		headers: {
			Authorization: token,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: taskId
		})
	});

	const data = await response.text();

	return data;
};
