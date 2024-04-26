import { ComponentProps, PropsWithChildren, forwardRef } from 'react';
import { SectionContainerStyled, StyledSection } from '../styles/styles';

const Section = forwardRef<HTMLElement, PropsWithChildren<ComponentProps<typeof StyledSection>>>(({ children, ...sectionProps }, ref) => (
	<StyledSection {...sectionProps} ref={ref}>
		<SectionContainerStyled>{children}</SectionContainerStyled>
	</StyledSection>
));
Section.displayName = 'Section';
export { Section };
