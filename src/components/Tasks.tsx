import styled from 'styled-components';

import { TasksForm, Task } from '@/components';

import { tasksState } from '@/state';
import { useEffect } from 'react';

const TasksContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20ch, 30ch));
	gap: 1em;
	justify-content: center;
`;

export function Tasks() {
	const tasks = tasksState((state) => state.tasks);
	const fetchItems = tasksState((state) => state.fetch);

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<TasksContainer>
			<TasksForm />
			{tasks.length > 0
				? tasks.map((task) => <Task key={task.id} {...task} />)
				: 'No tasks'}
		</TasksContainer>
	);
}
