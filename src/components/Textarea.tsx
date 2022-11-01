import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { StyledTextArea, StyledField, StyledError } from '@/styled-components';

export function Textarea({
	placeholder,
	register,
	error,
	rows,
	cols
}: {
	placeholder: string;
	register: UseFormRegisterReturn;
	error?: FieldError;
	rows?: number;
	cols?: number;
}) {
	return (
		<StyledField>
			<StyledTextArea
				rows={rows ?? 5}
				cols={cols}
				{...register}
				placeholder={placeholder}
			></StyledTextArea>
			{error && <StyledError>{error.message}</StyledError>}
		</StyledField>
	);
}
