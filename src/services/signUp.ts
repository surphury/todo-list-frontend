import { Server } from '@/constants';

import { Register } from '@/models';

export const signUp = async (credencials: Register): Promise<unknown> => {
	const response = await fetch(`${Server.Url}/register_user`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credencials)
	});

	const data = await response.json();

	return data;
};
