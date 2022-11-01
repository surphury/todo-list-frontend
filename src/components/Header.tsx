import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header``;

const StyledNav = styled.nav``;

const StyledList = styled.ul`
	display: flex;
	justify-content: end;
	column-gap: var(--gap);
	padding-inline: 1em;
	list-style-type: none;
	margin-block: 0;
`;

const StyledItem = styled.li``;

interface Link {
	to: string;
	text: string;
}

export function Header({ links }: { links?: Link[] }) {
	return (
		<StyledHeader>
			{links && (
				<StyledNav>
					<StyledList>
						{links.map(({ to, text }, index) => (
							<StyledItem key={index}>
								<NavLink to={to}>{text}</NavLink>
							</StyledItem>
						))}
					</StyledList>
				</StyledNav>
			)}
		</StyledHeader>
	);
}
