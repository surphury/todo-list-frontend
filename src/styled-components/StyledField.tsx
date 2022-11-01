import styled from 'styled-components';

interface Props {
	error?: boolean;
}

export const StyledField = styled.span<Props>`
	color: ${({ error }) => (error ? 'var(--error)' : 'unset')};
	position: relative;
	display: grid;
	align-items: center;
`;
