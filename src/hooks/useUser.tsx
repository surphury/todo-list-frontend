import { useEffect } from 'react';
/* import { useAtom } from 'jotai'; */

import { userState } from '@/state';

export const useUser = () => {
	/* const [user, setUser] = useAtom(userState); */
	/* useEffect(() => {
		const userInfo = localStorage.getItem('user');

		if (userInfo) {
			setUser(JSON.parse(userInfo));
		}
	}, []); */
	/* useEffect(() => {
		if (user) {
			localStorage.setItem('user', JSON.stringify(user));
		}
	}, [user]);

	return user; */
};
