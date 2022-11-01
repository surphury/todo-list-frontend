import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { password, user } from '@/assets/icons';

import { Field, Button } from '@/components';

import { FormField, Login } from '@/models';

import { login } from '@/services';

import { StyledForm } from '@/styled-components';

import { userState } from '@/state';

const form: FormField<Login>[] = [
	{
		icon: user,
		placeholder: 'Username',
		name: 'username',
		validation: {
			minLength: {
				value: 4,
				message: 'Username must be at least 4 characters'
			},
			maxLength: {
				value: 50,
				message: 'Username must be at most 50 characters'
			},
			required: {
				value: true,
				message: 'Required field'
			},
			pattern: {
				value: /[A-Za-z0-9]/i,
				message: 'Username must be alphanumeric'
			}
		}
	},
	{
		icon: password,
		placeholder: 'Password',
		type: 'password',
		name: 'password',
		validation: {
			minLength: {
				value: 4,
				message: 'Password must be at least 4 characters'
			},
			required: {
				value: true,
				message: 'Required field'
			}
		}
	}
];

export function LoginForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<Login>({ mode: 'onTouched' });

	const navigate = useNavigate();

	const onSubmit = async (data: Login) => {
		const result = await login(data);
		userState.setState({ user: result });
		navigate('/', { replace: true });
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			{form.map(({ icon, placeholder, name, validation, type }) => (
				<Field
					type={type}
					key={name}
					icon={icon}
					placeholder={placeholder}
					register={register(name, validation)}
					error={errors[name]}
				/>
			))}
			<Button type="submit" disabled={isSubmitting}>
				Login
			</Button>
		</StyledForm>
	);
}
