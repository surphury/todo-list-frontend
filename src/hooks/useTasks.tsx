import { useEffect } from 'react';
/* import { useAtom } from 'jotai'; */

import { tasksState, userState } from '@/state';
import { getTasks } from '@/services';

export const useTasks = () => {
	/* const [user] = useAtom(userState);
	const [tasks, setTasks] = useAtom(tasksState);

	useEffect(() => {
		if (tasks.length === 0 && user) {
			getTasks(user.token).then((tasks) => {
				if (tasks) {
					setTasks(tasks);
				}
			});
		}
	}, []);

	return tasks; */
};
