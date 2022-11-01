import styled from 'styled-components';

interface StyledInputProps {
	icon?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
	background-color: var(--secondary-bg-colour);
	border-width: 0;
	padding-inline-start: ${({ icon }) => (icon ? '2em' : '1em')};
	padding-inline-end: 1em;
	padding-block: 0.5em;
	border-radius: 0.5ch;
	color: inherit;
	width: 100%;
`;
