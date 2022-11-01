import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: var(--secondary-bg-colour);
	font-weight: 700;
	color: var(--text-colour);
	padding: 0.5em 1em;
	width: 100%;
	border-radius: 0.5ch;
	border: 1px solid;

	&:disabled {
		opacity: 0.6;
	}
`;
