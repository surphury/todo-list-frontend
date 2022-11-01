import { HTMLInputTypeAttribute } from 'react';
import { StyledInput } from '@/styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';

export function Input({
	placeholder,
	type = 'text',
	register,
	icon
}: {
	placeholder?: string;
	type?: HTMLInputTypeAttribute;
	register: UseFormRegisterReturn;
	icon: boolean;
}) {
	return (
		<StyledInput
			icon={icon}
			{...register}
			type={type}
			placeholder={placeholder}
		/>
	);
}
