import { useForm } from 'react-hook-form';

import { email, password, user } from '@/assets/icons';

import { Field, Button } from '@/components';

import { FormField, Register } from '@/models';

import { signUp } from '@/services';

import { StyledForm } from '@/styled-components';

import { Regex, Routing } from '@/constants';
import { useNavigate } from 'react-router-dom';

const form: FormField<Register>[] = [
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
		icon: email,
		placeholder: 'Email',
		type: 'email',
		name: 'email',
		validation: {
			minLength: {
				value: 4,
				message: 'Password must be at least 4 characters'
			},
			required: {
				value: true,
				message: 'Required field'
			},
			pattern: {
				value: Regex.email,
				message: 'Email must be valid'
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

export function RegisterForm() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting }
	} = useForm<Register>({ mode: 'onTouched' });

	const onSubmit = async (data: Register) => {
		const result = await signUp(data);

		if (result) {
			navigate(Routing.LOGIN, { replace: true });
		}
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
