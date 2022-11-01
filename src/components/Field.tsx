import { HTMLInputTypeAttribute } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';

import { Input, Icon } from '@/components';

import { StyledError, StyledField } from '@/styled-components';

const FieldContainer = styled.span`
	display: grid;
	gap: 0.4ch var(--gap);
`;

const StyledIcon = styled(Icon)`
	position: absolute;
	left: 0.5em;
	aspect-ratio: 1 / 1;
	height: 1em;
`;

export function Field({
	icon,
	placeholder,
	register,
	error,
	type
}: {
	icon?: string;
	placeholder?: string;
	register: UseFormRegisterReturn;
	error?: FieldError;
	type?: HTMLInputTypeAttribute;
}) {
	const hasErrors = error !== undefined;
	const hasIcon = Boolean(icon);

	return (
		<FieldContainer>
			<StyledField error={hasErrors}>
				<Input
					placeholder={placeholder}
					register={register}
					type={type}
					icon={hasIcon}
				/>
				{icon && <StyledIcon icon={icon} />}
			</StyledField>
			{error && <StyledError>{error.message}</StyledError>}
		</FieldContainer>
	);
}
