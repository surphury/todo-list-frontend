import { MouseEventHandler, ReactNode } from 'react';

import { StyledButton } from '@/styled-components';

export function Button({
	onClick,
	children,
	type = 'button',
	disabled = false
}: {
	onClick?: MouseEventHandler;
	children?: ReactNode;
	type?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}) {
	return (
		<StyledButton type={type} onClick={onClick} disabled={disabled}>
			{children}
		</StyledButton>
	);
}
