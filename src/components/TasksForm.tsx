import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Field, Button, Textarea } from '@/components';

import { Task } from '@/models';

import { postTask } from '@/services';

import { tasksState, userState } from '@/state';

const TaskForm = styled.form`
	display: grid;
	row-gap: 1em;
`;

export function TasksForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<Task>({ mode: 'onTouched' });

	const user = userState((state) => state.user);

	const onSubmit = async (task: Task) => {
		if (user) {
			const res = await postTask(task, user.token);
			tasksState.setState({ tasks: res });
		}
	};

	return (
		<TaskForm onSubmit={handleSubmit(onSubmit)}>
			<Field
				placeholder="Name"
				register={register('name', {
					minLength: {
						value: 4,
						message: 'Username must be at least 4 characters'
					},
					required: {
						value: true,
						message: 'Required field'
					}
				})}
				error={errors['name']}
			/>
			<Textarea
				placeholder="Description"
				register={register('description', {
					minLength: {
						value: 4,
						message: 'Username must be at least 4 characters'
					},
					required: {
						value: true,
						message: 'Required field'
					}
				})}
				error={errors['description']}
			/>
			<Button type="submit" disabled={isSubmitting}>
				Add Task
			</Button>
		</TaskForm>
	);
}
