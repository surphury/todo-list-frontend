import styled from 'styled-components';

interface Props {
	icon: string;
}

interface ComponentProps {
	icon: string;
	className?: string;
}

const StyledIconWithMask = styled.span<Props>`
	--size: 1em;
	&::before {
		content: '';
		mask-image: url(${({ icon }) => icon});
		mask-repeat: no-repeat;
		width: var(--size);
		aspect-ratio: 1 / 1;
		display: inline-block;
		overflow: hidden;
		background-color: currentColor;
		mask-size: contain;
		mask-position: center;
	}
`;

export function Icon({ icon, className }: ComponentProps) {
	/* return mask ? ( */
	return <StyledIconWithMask icon={icon} className={className} />;
	/* ) : (
		<StyledIcon icon={icon} className={className} />
	); */
}
