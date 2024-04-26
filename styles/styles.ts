import styled from 'styled-components';
import { Section } from '../components/Section';

interface TextProps {
	size?: 'large' | 'medium' | 'small';
}

interface StyledSectionProps {
	appearance?: 'sand' | 'text' | 'dark';
}

interface StyledContentProps {
	width?: number;
}

interface StyledContentTitleProps {
	display?: 'onlyMobile' | 'onlyDesktop' | 'always';
}

interface HeaderStyledProps {
	hasScrolling: boolean;
}

interface ContactFormMessageSentProps {
	show: boolean;
}

export const Text = styled.p<TextProps>`
	font-family: 'Slim', sans-serif;
	padding: 0;
	margin: 0;
	${({ size }) => {
		switch (size) {
			case 'large':
				return `
					font-size: 3rem;
					line-height: 4.6rem;
					@media screen and (max-width: 1240px) {
						line-height: 4.2rem;
					}
					@media screen and (max-width: 768px) {
						font-size: 2.4rem;
						line-height: 3.2rem;
					}
				`;
			case 'small':
				return `
					font-size: 1.6rem;
					line-height: 2.4rem;

					@media screen and (max-width: 768px) {
						font-size: 1.4rem;
						line-height: 2.0rem;
					}
				`;
			default:
				return `
					font-size: 2.4rem;
					line-height: 3.2rem;

					@media screen and (max-width: 768px) {
						font-size: 2.0rem;
						line-height: 2.4rem;
					}
				`;
		}
	}}
`;

export const StyledSection = styled.section<StyledSectionProps>`
	scroll-margin: 6rem;
	background-color: ${({ theme, appearance }) => (appearance === 'dark' ? theme.original.fill : appearance ? theme[appearance] : theme.background)};
	color: ${({ theme, appearance }) => (appearance === 'dark' ? theme.original.white : appearance === 'sand' ? theme.original.black : theme.text)};
`;

export const SectionContainerStyled = styled.div`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	max-width: 1440px;
	margin: auto;
	padding: 12rem;

	@media screen and (max-width: 1024px) {
		padding: 6rem;
	}

	@media screen and (max-width: 768px) {
		padding: 1.6rem;
		padding-top: 6rem;
		padding-bottom: 6rem;
		flex-wrap: wrap;
		gap: 2.4rem;
	}
`;

export const StyledContent = styled.div<StyledContentProps>`
	${({ width }) => width && `width: ${width}%;`}

	&:not(:last-of-type) {
		padding-right: 4.6rem;
		@media screen and (max-width: 768px) {
			padding-right: 0;
		}
	}
	&:not(:first-of-type) {
		padding-left: 4.6rem;

		@media screen and (max-width: 768px) {
			padding-left: 0;
		}
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 0;
		padding-right: 0;
	}

	h4 {
		@media screen and (max-width: 768px) {
			padding-bottom: 3.2rem;
		}
	}
`;

export const StyledContentTitle = styled.h4<StyledContentTitleProps>`
	${({ display }) => {
		switch (display) {
			case 'onlyMobile':
				return `
				display: none;
				@media screen and (max-width: 768px) {
					display: block;
				}
				
			`;
			case 'onlyDesktop':
				return `
				@media screen and (max-width: 768px) {
					display: none;
				}
				`;
		}
	}}
`;

export const HeaderStyled = styled.header<HeaderStyledProps>`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	top: 0;
	background-color: ${({ theme }) => theme.body};
	z-index: 100;

	padding: ${({ hasScrolling }) => (hasScrolling ? '2.2rem 6.4rem' : '3.2rem 6.4rem')};

	@media screen and (max-width: 1240px) {
		padding: ${({ hasScrolling }) => (hasScrolling ? '2.2rem 3.2rem' : '3.2rem')};
	}

	@media screen and (max-width: 768px) {
		padding: ${({ hasScrolling }) => (hasScrolling ? '1.6rem' : '3rem 1.6rem')};
	}

	div + div {
		padding-left: 2.4rem;
	}

	> svg {
		width: ${({ hasScrolling }) => (hasScrolling ? '10rem' : '13.7rem')};
		height: 3.2rem;
		fill: ${({ theme }) => theme.orange};
	}

	& > * {
		padding-left: ${({ hasScrolling }) => (hasScrolling ? '1.2rem' : '2.4rem')};

		@media screen and (max-width: 768px) {
			padding-left: 1.2rem;
		}

		svg {
			width: ${({ hasScrolling }) => (hasScrolling ? '2rem' : '2.4rem')};
			fill: ${({ theme }) => theme.fill};
		}

		p {
			color: ${({ theme }) => theme.text};
		}
	}
`;

export const HeaderMobileNavigation = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	padding: 2rem;
`;

export const HeaderNavigation = styled.nav`
	display: flex;
`;
export const HeaderButtonStyled = styled.button`
	appearance: none;
	background: none;
	border: none;
	cursor: pointer;
	font-size: 1.8rem;
	display: flex;
	align-items: center;
	justify-content: start;
	min-height: 1rem;
	color: inherit;
	gap: 0.5rem;
	p {
		padding-right: 1rem;
		margin: 0;
	}

	&:hover {
		p {
			color: ${({ theme }) => theme.hover.text};
		}

		svg {
			fill: ${({ theme }) => theme.hover.fill};
			transition-delay: 0 !important;
		}
	}
`;

export const HeroSection = styled(Section)`
	${SectionContainerStyled} {
		padding-top: 10rem;

		@media screen and (max-width: 1240px) {
			padding-top: 10rem;
		}

		@media screen and (max-width: 768px) {
			padding-top: 9.6rem;
		}
	}
`;
export const HeroTitleContent = styled(StyledContent)`
	z-index: 10;
	padding-left: 0 !important;
	padding-right: 0 !important;

	@media screen and (max-width: 768px) {
		width: 100%;
		order: 2;
	}
`;

export const HeroImageContent = styled(StyledContent)`
	padding-left: 0 !important;
	padding-right: 0 !important;
	overflow: hidden;
	border-radius: 2.5rem;

	@media screen and (max-width: 768px) {
		width: 100%;
		order: 1;
	}
`;

export const HeroRightWrapperStyled = styled.div`
	position: relative;
	width: 100%;
	min-width: 79rem;
	border-radius: 2.5rem;
	height: 100%;
	overflow: hidden;
	height: 70rem;

	@media screen and (max-width: 1240px) {
		width: 100%;
		min-width: 55rem;
		height: 60rem;
	}

	@media screen and (max-width: 767px) {
		width: 100%;
		height: 100%;
		min-width: auto;
		min-height: 36rem;
		margin: 0 auto;
	}

	img {
		object-position: right;
	}
`;

export const HeroTitleStyled = styled.h1`
	min-width: 79rem;
	white-space: nowrap;
	padding-bottom: 2rem;

	@media screen and (max-width: 1240px) {
		min-width: auto;
	}

	@media screen and (max-width: 768px) {
		white-space: wrap;
	}
`;

export const ScrollDownStyled = styled.button`
	appearance: none;
	background: none;
	border: none;
	margin-top: 18.4rem;
	padding-left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		margin-top: 3.2rem;
	}

	&:hover {
		svg {
			animation: arrowAnimation 1s;
		}
	}

	@keyframes arrowAnimation {
		0% {
			transform: translateY(0);
			opacity: 1;
		}
		50% {
			transform: translateY(100%);
			opacity: 0;
		}
		51% {
			transform: translateY(-100%);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	span {
		display: block;
	}

	svg {
		height: 1.6rem;
		fill: ${({ theme }) => theme.text};
		padding-right: 2rem;
	}
`;

export const OurMissionLeftWrapperStyled = styled.div`
	position: relative;
	width: 100%;
	border-radius: 2.5rem;
	height: 100%;
	max-height: 57rem;
	overflow: hidden;
	height: 86rem;

	@media screen and (max-width: 767px) {
		max-height: 32rem;
	}
`;

export const OurVisionLeftWrapperStyled = styled.div`
	position: relative;
	width: 100%;
	border-radius: 2.5rem;
	height: 86rem;
	overflow: hidden;

	@media screen and (max-width: 768px) {
		height: 32rem;
	}
`;

export const OurValuesLeftWrapperStyled = styled.div`
	position: relative;
	width: 100%;
	border-radius: 2.5rem;
	max-height: 57rem;
	overflow: hidden;
	height: 86rem;

	@media screen and (max-width: 767px) {
		max-height: 32rem;
	}

	img {
		object-position: right;
	}
`;

export const OurCustomersGrid = styled.ul`
	list-style: none;
	display: grid;
	margin: 0;
	padding: 0;
	grid-template-columns: repeat(4, 1fr);
	gap: 10rem;
	width: 100%;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 4rem;
	}
`;
export const OurCustomersItem = styled.li`
	width: 100%;
	height: 10rem;
	position: relative;

	&:hover {
		transform: scale(1.1);
	}

	@media screen and (max-width: 768px) {
		max-width: 20rem;
		margin: auto;
	}
`;

export const OurPartnersWrapperStyled = styled.div`
	text-align: center;
	width: 100%;

	h3 {
		padding: 0 0 8rem;
		margin: 0;

		@media screen and (max-width: 767px) {
			padding: 0 0 4rem;
		}
	}

	p {
		padding: 0 0 8rem;
		max-width: 78rem;
		margin: 0 auto;

		@media screen and (max-width: 767px) {
			padding: 0 0 4rem;
		}
	}
`;

export const OurPartnersGrid = styled.ul`
	list-style: none;
	display: grid;
	margin: 0;
	padding: 0;
	grid-template-columns: repeat(3, 1fr);
	gap: 10rem;
	width: 100%;

	@media screen and (max-width: 1240px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const OurPartnersItem = styled.li`
	width: 100%;
	height: 10rem;
	position: relative;

	&:hover {
		transform: scale(1.1);
	}

	@media screen and (max-width: 1240px) {
		height: 8rem;
	}

	@media screen and (max-width: 768px) {
		height: 6rem;
	}
`;

export const DocumentsGrid = styled.ul`
	list-style: none;
	display: grid;
	padding: 0;
	grid-template-columns: 1fr;
	width: 100%;
	background-color: ${({ theme }) => theme.original.white};
	border-radius: 2.5rem;

	@media screen and (max-width: 1024px) {
		margin: 5rem 0 0;
	}

	@media screen and (max-width: 768px) {
		margin: 0;
	}
`;

export const DocumentsItem = styled.li`
	margin: 5rem 7rem;
	height: 10rem;
	position: relative;

	&:hover {
		transform: scale(1.1);
	}

	@media screen and (max-width: 1024px) {
		margin: 5rem 4rem;
	}

	@media screen and (max-width: 768px) {
		max-width: 20rem;
		width: 100%;
		margin: 0 auto 2rem;
	}
`;

export const TestimonialsListStyled = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	li + li {
		padding-top: 12rem;

		@media screen and (max-width: 768px) {
			padding-top: 8rem;
		}
	}
`;

export const TestimonialsElementWrapperStyled = styled.div`
	position: relative;
	width: 100%;
	max-width: 25rem;
	height: 5rem;
	margin: 0 auto 0 0;
`;

export const TestimonialsElementStyled = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}

	&:nth-child(2n) {
		${TestimonialsElementWrapperStyled} {
			img {
				width: auto !important;
			}
		}
	}
`;

export const TestimonialsElementLeftStyled = styled.div`
	width: 35%;
	position: sticky;
	top: 16.5rem;

	@media screen and (max-width: 1240px) {
		top: 10rem;
	}

	@media screen and (max-width: 768px) {
		padding-bottom: 2.2rem;
		position: relative;
		top: 0;
	}

	h4 {
		margin: 0;
		padding-bottom: 2.4rem;

		@media screen and (max-width: 768px) {
			padding-bottom: 1rem;
		}
	}
`;

export const TestimonialsElementRightStyled = styled.div`
	width: 65%;

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-top: 2rem;
	}

	p,
	h5 {
		@media screen and (max-width: 768px) {
			word-wrap: break-word;
		}
	}

	h5 {
		padding: 0 0 2rem;
		margin: 0;
	}
`;

export const TestimonialsInfoStyled = styled.div`
	padding: 2rem 0 0;
`;

export const ContactMapWrapperStyled = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	height: 86rem;
	border-radius: 2.5rem;
	border: 0.1rem solid ${({ theme }) => theme.original.white};

	overflow: hidden;

	@media screen and (max-width: 768px) {
		height: 48rem;
		margin-bottom: 4rem;
	}
`;

export const ContactFormWrapperStyled = styled.div`
	input,
	textarea {
		appearance: none;
		background: none;
		border: 0.1rem solid ${({ theme }) => theme.original.white};
		border-radius: 0.8rem;
		width: 100%;
		margin: 0 0 1.8rem;
		font-family: 'Neutral', sans-serif;
		font-size: 1.8rem;
		line-height: 2.6rem;
		padding: 1.6rem;
		color: ${({ theme }) => theme.original.white};

		&::placeholder {
			opacity: 0.4;
		}
	}

	button {
		appearance: none;
		background: ${({ theme }) => theme.orange};
		border-radius: 5.8rem;
		border: none;
		overflow: hidden;
		color: ${({ theme }) => theme.original.body};
		width: 100%;
		padding: 1.6rem;
		font-family: 'Neutral', sans-serif;
		font-size: 1.8rem;
		line-height: 2.6rem;
		cursor: pointer;

		&:hover {
			transform: scale(1.05);
		}
	}
`;

export const ContactFormInfoStyled = styled.div`
	padding-top: 7rem;

	@media screen and (max-width: 1024px) {
		padding-top: 5rem;
	}

	@media screen and (max-width: 768px) {
		padding-top: 4rem;
	}

	p + p {
		padding-top: 2rem;
	}

	a {
		color: ${({ theme }) => theme.orange};
	}

	form {
		position: relative;
	}
`;

export const ContactFormErrorMessageStyled = styled.div`
	color: ${({ theme }) => theme.red};
	font-family: 'Median', sans-serif;
	font-size: 1.2rem;
	padding-bottom: 1rem;
`;

export const ReCAPTCHAContainer = styled.div`
	div > div > div {
		margin: auto;
	}
	margin: 0 0 1.8rem;
`;

export const ContactFormMessageSentStyled = styled.div<ContactFormMessageSentProps>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.body};
	z-index: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Median', sans-serif;
	font-size: 2.4rem;
	line-height: 3.2rem;
	padding: 1rem;
	text-align: center;
	color: #2db83d;
	opacity: ${({ show }) => (show ? 1 : 0)};
	pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
	visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
	transition: all 0.3s ease-in-out;
`;
