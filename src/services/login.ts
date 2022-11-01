import { Server } from '@/constants';

import { Login, User } from '@/models';

export const login = async (credencials: Login): Promise<User> => {
	const response = await fetch(`${Server.Url}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credencials)
	});

	const data = await response.json();

	return data;
};
