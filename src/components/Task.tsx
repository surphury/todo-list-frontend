import styled from 'styled-components';
import * as timeago from 'timeago.js';

import { TaskHistory, Task as TaskModel } from '@/models';

import { tasksState } from '@/state';

import { TaskState } from '@/constants';

import { Icon } from '@/components';

import { xmark } from '@/assets/icons';

const Card = styled.div`
	display: grid;
	row-gap: 1em;
	background-color: var(--secondary-bg-colour);
	/* border-radius: 0.5em;
	overflow: hidden; */
`;

const RemoveButton = styled.button`
	margin-left: auto;
	background-color: transparent;
	border-width: 0;
	color: var(--text-colour);
`;

const currentState = (lastHistory: TaskHistory): TaskState => {
	if (!lastHistory?.start_time && !lastHistory?.finish_time) {
		return TaskState.None;
	} else if (lastHistory?.start_time && lastHistory.finish_time) {
		return TaskState.Finished;
	} else {
		return TaskState.Started;
	}
};

export function Task({ name, description, id, history }: TaskModel) {
	const status = currentState(history[history.length - 1]);

	const lastHistory = history[history.length - 1];

	const { remove, finish, start } = tasksState((state) => state);

	const removeTask = async (id: number) => {
		await remove(id);
	};

	const finishTask = async (id: number) => {
		await finish(id);
	};

	const startTask = async (id: number) => {
		await start(id);
	};

	return (
		<Card>
			<RemoveButton
				title="remove"
				aria-label="remove"
				type="button"
				onClick={() => removeTask(id)}
			>
				<Icon icon={xmark} />
			</RemoveButton>
			<span>{name}</span>
			{/* <span>{description}</span> */}
			{lastHistory?.start_time && lastHistory?.finish_time && (
				<h2>
					{Math.round(
						(lastHistory.finish_time - lastHistory.start_time) / 60
					)}{' '}
					minutes
				</h2>
			)}
			{status === TaskState.Started && lastHistory?.start_time && (
				<span>
					Started{' '}
					{timeago.format(new Date(lastHistory.start_time * 1000))}
				</span>
			)}
			{status === TaskState.Finished && lastHistory?.finish_time && (
				<span>
					Finished{' '}
					{timeago.format(new Date(lastHistory.finish_time * 1000))}
				</span>
			)}
			{status === TaskState.None ? (
				<button onClick={() => startTask(id)}>---</button>
			) : status === TaskState.Started ? (
				<button onClick={() => finishTask(id)}>Finish</button>
			) : (
				<button onClick={() => startTask(id)}>Start</button>
			)}
		</Card>
	);
}
