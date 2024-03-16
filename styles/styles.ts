import styled from 'styled-components';

interface ContainerStyledProps {
	appearance?: 'sand' | 'text';
}

interface WrapperStyledProps {
	wide?: boolean;
}

export const HeaderStyled = styled.header`
	padding: 6.4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	top: 0;
	background-color: ${({ theme }) => theme.body};
	z-index: 100;

	@media screen and (max-width: 1240px) {
		padding: 3.2rem;
	}
	@media screen and (max-width: 768px) {
		padding: 4rem 1.6rem;
	}

	div + div {
		padding-left: 2.4rem;
	}

	svg {
		width: 13.7rem;
		height: 3.2rem;
		fill: ${({ theme }) => theme.orange};
	}
`;

export const HeaderBarStyled = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	& > * {
		padding-left: 2.4rem;

		svg {
			width: 2.4rem;
			fill: ${({ theme }) => theme.fill};
		}

		&:hover {
			p {
				color: ${({ theme }) => theme.hover.text};
			}

			svg {
				/* transition: fill 0.1s ease; */
				fill: ${({ theme }) => theme.hover.fill};
				transition-delay: 0 !important;
			}
		}
	}
`;

export const HeaderLoginInStyled = styled.div``;
// 1
export const HeroStyled = styled.div`
	/* height: calc(100vh - 10.1rem); */
	padding-top: 16.5rem;

	@media screen and (max-width: 1240px) {
		padding-top: 10rem;
	}

	@media screen and (max-width: 768px) {
		padding-top: 11.7rem;
	}
`;

export const ContainerStyled = styled.div<ContainerStyledProps>`
	background-color: ${({ theme, appearance }) => appearance ? theme[appearance] : theme.background};`;

export const WrapperStyled = styled.div<WrapperStyledProps>`
	padding: 0 16.8rem;
	width: 100%;
	display: flex;
	justify-content: space-between;

	@media screen and (min-width: 1740px) {
		padding: 0 16.8rem;
	}

	@media screen and (max-width: 1240px) {
		padding: 0 6rem;
	}

	@media screen and (max-width: 768px) {
		padding: 0 1.6rem;
		flex-wrap: wrap;
	}
`;


export const HeroSubTileStyled = styled.p`
	font-family: 'NeutralMono', sans-serif;
	font-size: 1.8rem;
	padding-top: 3.4rem;
`;

export const HeroLeftStyled = styled.div`
	width: 35%;
	z-index: 10;

	@media screen and (max-width: 768px) {
		width: 100%;
		order: 2;
	}

	${HeroSubTileStyled} {
    @media screen and (max-width: 768px) {
			display: none;
		}
  }
`;

export const HeroRightStyled = styled.div`
	/* width: 60%; */
	position: relative;
	overflow: hidden;
	width: 100%;
	border-radius: 2.5rem;

	@media screen and (max-width: 768px) {
		order: 1;
		width: 100%;
	}

	${HeroSubTileStyled} {
		display: none;

		@media screen and (max-width: 768px) {
			display: block;
			padding: 1rem 0 3.2rem;
		}
	}
`;

export const HeroRightWrapperStyled = styled.div`
	position: relative;
	width: 100%;
	/* width: calc(100% * (79/170)); */
	/* margin-left: calc(-100% * (16/170)); */
	min-width: 79rem;
	border-radius: 2.5rem;
	height: 100%;
	overflow: hidden;
	height: 86rem;

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

export const HeroTileStyled = styled.div`
	font-family: 'BulkyWide', sans-serif;
	font-size: 8.8rem;
	line-height: 9.6rem;
	padding-top: 18.4rem;
	min-width: 79rem;
	white-space: nowrap;

	@media screen and (max-width: 1240px) {
		font-size: 6.8rem;
		line-height: 7.6rem;
		min-width: auto;
	}

	@media screen and (max-width: 768px) {
		font-size: 4.8rem;
		line-height: 5.6rem;
		padding-top: 3.2rem;
		white-space: wrap;
	}
`;

export const ScrolDownStyled = styled.button`
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
		font-size: 1.8rem;
		font-family: 'NeutralMono', sans-serif;
	}

	svg {
		height: 1.6rem;
		fill: ${({ theme }) => theme.text};
		padding-right: 2rem;
	}
`;


// 2
export const OurStoryStyled = styled.div`
	padding-top: 20rem;

	@media screen and (max-width: 1024px) {
		padding-top: 12rem;
	}

	@media screen and (max-width: 768px) {
		/* padding-top: 12.8rem; */
		padding-top: 6.4rem;
	}
`;

export const OurStoryLeftStyled = styled.div`
	width: 35%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}

	h4 {
		font-size: 1.8rem;
		line-height: 3.2rem;
		font-family: 'NeutralMono', sans-serif;
		position: sticky;
		top: 16.5rem;

		@media screen and (max-width: 1240px) {
			top: 10rem;
		}

		@media screen and (max-width: 768px) {
			padding-bottom: 3.2rem;
			/* top: 11.7rem; */
		}
	}
`;

export const OurStoryRightStyled = styled.div`
	width: 65%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}

	p {
		font-size: 4.8rem;
		line-height: 6.4rem;
		font-family: 'Slim', sans-serif;
		word-wrap: break-word;

		@media screen and (max-width: 768px) {
			font-size: 3.2rem;
			line-height: 4rem;
			word-wrap: break-word;
		}
	}
`;


// 3
export const OurMissionStyled = styled.div`
	padding: 20rem 0;

	@media screen and (max-width: 1024px) {
		padding: 12rem 0;
	}

	@media screen and (max-width: 768px) {
		/* padding: 12.8rem 0; */
		padding: 6.4rem 0;
	}

	h4 {
		font-size: 1.8rem;
		line-height: 3.2rem;
		font-family: 'NeutralMono', sans-serif;
	}

	p {
		font-size: 4rem;
		line-height: 5.6rem;
		font-family: 'Slim', sans-serif;

		@media screen and (max-width: 768px) {
			font-size: 2.4rem;
			line-height: 3.2rem;
			padding-top: 3.2rem;
		}
	}
`;

export const OurMissionLeftStyled = styled.div`
	width: 50%;
	padding-right: 4.3rem;

	@media screen and (max-width: 1024px) {
		padding-right: 2rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-right: 0;
	}

	h4 {
		display: none;
		@media screen and (max-width: 768px) {
			display: block;
		}
	}
`;

export const OurMissionRightStyled = styled.div`
	width: 50%;
	padding-left: 4.3rem;

	@media screen and (max-width: 1024px) {
		padding-left: 2rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 0;
	}

	h4 {
		padding-bottom: 7.2rem;

		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const OurMissionLeftWrapperStyled = styled.div`
	position: relative;
	/* width: calc(100% * (55/170)); */
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

// 4
export const OurVisionStyled = styled.div`
	h4 {
		font-size: 4.8rem;
		line-height: 5.6rem;
		font-family: 'BulkyWide', sans-serif;
		padding: 0 0 8rem;
		margin: 0;

		@media screen and (max-width: 768px) {
			font-size: 4rem;
			line-height: 4.8rem;
		}
	}

	p {
		font-size: 1.8rem;
		line-height: 3.2rem;
		font-family: 'SlimMono', sans-serif;

		@media screen and (max-width: 768px) {
			font-size: 1.6rem;
			line-height: 2.4rem;
		}
	}

	h4, p {
		color: ${({ theme }) => theme.original.text};
	}

	${WrapperStyled}  {
		padding-top: 19rem;
		padding-bottom: 19rem;

		@media screen and (max-width: 1024px) {
			padding-top: 12rem;
			padding-bottom: 12rem;
		}

		@media screen and (max-width: 767px) {
			padding-top: 9.6rem;
			padding-bottom: 9.6rem;
		}
	}
`;

export const OurVisionLeftStyled = styled.div`
	width: 50%;
	padding-right: 6.8rem;

	@media screen and (max-width: 1024px) {
		padding-right: 3rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-right: 0;
	}
`;

export const OurVisionRightStyled = styled.div`
	width: 50%;
	padding-left: 4.3rem;

	@media screen and (max-width: 1024px) {
		padding-left: 2rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 0;
	}
`;

export const OurVisionLeftWrappStyled = styled.div`
	width: 100%;
	position: sticky;
	top: 20.5rem;

	@media screen and (max-width: 1240px) {
		top: 12rem;
	}

	@media screen and (max-width: 768px) {
		max-width: 40rem;
		margin: 0 auto;
		padding-bottom: 6.8rem;
	}
`;

// 5
export const OurValuesStyled = styled.div`
	padding: 24rem 0;

	@media screen and (max-width: 1240px) {
		padding: 12rem 0;
	}

	@media screen and (max-width: 768px) {
		/* padding: 12.8rem 0; */
		padding: 6.4rem 0;
	}

	h4 {
		font-size: 1.8rem;
		line-height: 3.2rem;
		font-family: 'NeutralMono', sans-serif;
		padding: 0 0 7.2rem;
		margin: 0;
	}

	p {
		font-size: 4rem;
		line-height: 5.6rem;
		font-family: 'Slim', sans-serif;

		@media screen and (max-width: 1240px) {
			font-size: 3.2rem;
			line-height: 4.2rem;
		}

		@media screen and (max-width: 768px) {
			font-size: 2.4rem;
			line-height: 3.2rem;
			padding-top: 3.2rem;
		}
	}
`;

export const OurValuesLeftStyled = styled.div`
	width: 50%;
	padding-right: 4rem;

	@media screen and (max-width: 1024px) {
		padding-right: 2rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-right: 0;
		order: 1;
	}

	h4 {
		display: block;
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const OurValuesRightStyled = styled.div`
	width: 50%;
	padding-left: 4rem;

	@media screen and (max-width: 1024px) {
		padding-left: 2rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 0;
	}

	h4 {
		padding-bottom: 3.2rem;

		display: none;
		@media screen and (max-width: 768px) {
			display: block;
		}
	}
`;

export const OurCustomersLeftWrapperStyled = styled.div`
	position: relative;
	/* width: calc(100% * (55/170)); */
	width: 100%;
	border-radius: 2.5rem;
	height: 100%;
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

export const OurCustomersLeftStyled = styled.div`
	width: 35%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}

	h4 {
		font-size: 1.8rem;
		line-height: 3.2rem;
		font-family: 'NeutralMono', sans-serif;
		margin: 0;
		position: sticky;
		top: 16.5rem;

		@media screen and (max-width: 1240px) {
			top: 10rem;
		}

		@media screen and (max-width: 768px) {
			padding-bottom: 3.2rem;
		}
	}
`;

export const OurCustomersRightStyled = styled.div`
	width: 65%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}

	p {
		font-size: 4rem;
		line-height: 5.6rem;
		font-family: 'Slim', sans-serif;

		@media screen and (max-width: 768px) {
			font-size: 2.4rem;
			line-height: 4rem;
			word-wrap: break-word;
		}
	}
`;

// 6
export const OurCustomersStyled = styled.div`
	padding: 0 0 24rem;

	@media screen and (max-width: 1240px) {
		padding: 0 0 12rem;
	}

	@media screen and (max-width: 768px) {
		/* padding: 12.8rem 0; */
		padding: 0 0 6.4rem;
	}
`;

// 7
export const CustomersStyled = styled.div``;

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
	/* height: 100%; */
	position: relative;

	&:hover {
		transform: scale(1.1);
	}

	@media screen and (max-width: 768px) {
		max-width: 20rem;
		margin: auto;
	}
`;

// 8
export const DocumentsStyled = styled.div`
	padding: 24rem 0;

	@media screen and (max-width: 1240px) {
		padding: 12rem 0;
	}

	@media screen and (max-width: 768px) {
		/* padding: 12.8rem 0; */
		padding: 6.4rem 0;
	}

	h4 {
		font-size: 1.8rem;
		line-height: 3.2rem;
		font-family: 'NeutralMono', sans-serif;
		padding: 0 0 7.2rem;
		margin: 0;

		@media screen and (max-width: 768px) {
			padding: 0 0 2rem;
		}
	}

	p {
		font-size: 4rem;
		line-height: 5.6rem;
		font-family: 'Slim', sans-serif;

		@media screen and (max-width: 1240px) {
			font-size: 3.2rem;
			line-height: 4.2rem;
		}

		@media screen and (max-width: 768px) {
			font-size: 2.4rem;
			line-height: 3.2rem;
			padding-top: 3.2rem;
		}
	}

	span {
		display: block;
		font-size: 1.6rem;
		line-height: 2.4rem;
		font-family: 'Slim', sans-serif;
		padding-top: 7.2rem;

		@media screen and (max-width: 1240px) {
			padding-top: 5.2rem;
		}

		@media screen and (max-width: 768px) {
			padding-top: 3.2rem;
		}
	}
`;

export const DocumentsLeftStyled = styled.div`
	width: 50%;
	padding-right: 4rem;

	@media screen and (max-width: 1024px) {
		padding-right: 2rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-right: 0;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}

	h4 {
		display: none;

		@media screen and (max-width: 768px) {
			display: block;
		}
	}
`;

export const DocumentsRightStyled = styled.div`
	width: 50%;
	padding-left: 4rem;

	@media screen and (max-width: 1024px) {
		padding-left: 2rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 0;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
	}

	h4 {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const DocumentsGrid = styled.ul`
	list-style: none;
	display: grid;
	margin: 8rem 0 0;
	padding: 0;
	grid-template-columns: 1fr;
  /* gap: 10rem; */
	width: 100%;

	@media screen and (max-width: 1024px) {
		margin: 5rem 0 0;
	}

	@media screen and (max-width: 768px) {
		margin: 0;
	}
`;

export const DocumentsItem = styled.li`
	margin: 0 10rem 7rem;
	height: 10rem;
	/* width: 100%; */
	position: relative;

	&:hover {
		transform: scale(1.1);
	}
	
	@media screen and (max-width: 1024px) {
		margin: 0 10rem 6rem;
	}

	@media screen and (max-width: 768px) {
		max-width: 20rem;
		width: 100%;
		margin: 0 auto 2rem;
	}
`;

export const DocumentsLeftWrapperStyled = styled.div`
`;

// 9
export const OurPartnersStyled = styled.div`
	${WrapperStyled} {
		padding-top: 19rem;
		padding-bottom: 19rem;

		@media screen and (max-width: 1024px) {
			padding-top: 12rem;
			padding-bottom: 12rem;
		}

		@media screen and (max-width: 767px) {
			padding-top: 9.6rem;
			padding-bottom: 9.6rem;
		}
	}

	${ContainerStyled} {
		background-color: ${({ theme }) => theme.original.text};
	
	}
`;

export const OurPartnersWrapperStyled = styled.div`
	text-align: center;
	width: 100%;

	h4, p {
		color: ${({ theme }) => theme.original.white};
	}

	h4 {
		font-size: 4.8rem;
		line-height: 5.6rem;
		font-family: 'BulkyWide', sans-serif;
		padding: 0 0 8rem;
		margin: 0;

		@media screen and (max-width: 767px) {
			font-size: 4rem;
			padding: 0 0 4rem;
		}
	}

	p {
		font-size: 2.4rem;
		line-height: 3.2rem;
		font-family: 'Slim', sans-serif;
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

// 9

export const TestimonialsStyled = styled.div`
	padding: 24rem 0;

	@media screen and (max-width: 1240px) {
		padding: 12rem 0;
	}

	@media screen and (max-width: 768px) {
		/* padding: 12.8rem 0; */
		padding: 6.4rem 0;
	}

	h4 {
		display: block;
		font-size: 4.8rem;
		line-height: 5.6rem;
		font-family: 'BulkyWide', sans-serif;
		padding: 0 0 12rem;
		margin: 0;

		@media screen and (max-width: 1024px) {
			padding: 0 0 8rem;
		}

		@media screen and (max-width: 767px) {
			font-size: 4rem;
			padding: 0 0 4rem;
		}
	}
`;


export const TestimonialsListStyled = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	li + li {
		padding-top: 12rem;
	
		/* @media screen and (max-width: 1024px) {
			padding-top: 12rem;
		} */

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
		flex-direction: column	;
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
		padding-bottom: 3.2rem;
		/* top: 11.7rem; */
	}
	
	p {
		font-size: 1.8rem;
		line-height: 3.2rem;
		font-family: 'NeutralMono', sans-serif;
		padding-bottom: 2.4rem;
	}
`;

export const TestimonialsElementRightStyled = styled.div`
	width: 65%;

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-top: 2rem;
	}

	p, h5 {
		font-size: 2.4rem;
		line-height: 3.2rem;
		font-family: 'Slim', sans-serif;

		@media screen and (max-width: 768px) {
			font-size: 1.6rem;
			line-height: 2.4rem;
			word-wrap: break-word;
		}
	}

	h5 {
		padding: 0 0 2rem;
		margin: 0;
		font-family: 'Median', sans-serif;
	}
`;

export const TestimonialsInfoStyled = styled.div`
	font-size: 2.4rem;
	line-height: 3.2rem;
	font-family: 'Slim', sans-serif;
	padding: 2rem 0 0 ;

	@media screen and (max-width: 768px) {
		font-size: 1.6rem;
		line-height: 2.4rem;
		word-wrap: break-word;
	}

	b {
		margin: 0;
		font-family: 'Median', sans-serif;
	}

	b, span {
		display: block;
	}
`;

// 10
export const ContactStyled = styled.div`
	padding: 0 0 24rem;

	@media screen and (max-width: 1240px) {
		padding: 0 0 12rem;
	}

	@media screen and (max-width: 768px) {
		/* padding: 0 0 12.8rem; */
		padding: 0 0 6.4rem;
	}

	h4 {
		display: block;
		font-size: 4.8rem;
		line-height: 5.6rem;
		font-family: 'BulkyWide', sans-serif;
		padding: 0 0 8rem;

		@media screen and (max-width: 767px) {
			font-size: 4rem;
			padding: 0 0 4rem;
		}
	}
`;

export const ContactContainerStyled = styled.div`
	width: 100%;
	
`;

export const ContactTitleWrapperStyled = styled.div`
	width: 100%;
	text-align: left;

	h4 {
		margin: 0;
	}
`;

export const ContactWrapperStyled = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ContactLeftStyled = styled.div`
	width: 50%;
	padding-right: 4.3rem;

	@media screen and (max-width: 1024px) {
		padding-right: 2rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-right: 0;
	}
`;

export const ContactMapWrapperStyled = styled.div`
	position: relative;
	width: 100%;
	height: 80rem;
	border-radius: 2.5rem;
	overflow: hidden;

	@media screen and (max-width: 768px) {
		height: 48rem;
		margin-bottom: 4rem;
	}
`;

export const ContactFormWrapperStyled = styled.div`
	input, textarea {
		appearance: none;
		background: none;
		border: 0.1rem solid ${({ theme }) => theme.text};
		border-radius: 0.8rem;
		width: 100%;
		margin: 0 0 2.4rem;
		font-family: 'Neutral', sans-serif;
		font-size: 2.4rem;
		line-height: 3.2rem;
		padding: 1.6rem;

		&::placeholder {
			color: ${({ theme }) => theme.text};
			font-family: 'Neutral', sans-serif;
			font-size: 2.4rem;
			line-height: 3.2rem;
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
		margin: 2.4rem 0 0;
		font-family: 'Neutral', sans-serif;
		font-size: 2.4rem;
		line-height: 3.2rem;
		cursor: pointer;

		&:hover {
			transform: scale(1.05);
		}
	}
`;

export const ContactFormInfoStyled = styled.div`
	font-family: 'Slim', sans-serif;
	font-size: 1.6rem;
	line-height: 2.4rem;
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
`;

export const ContactFormErrorMessageStyled = styled.div`
	color: ${({ theme }) => theme.red};
	font-family: 'Median', sans-serif;
	font-size: 1.2rem;
	padding-bottom: 0.5rem;
`;

export const ContactRightStyled = styled.div`
	width: 50%;
	padding-left: 4.3rem;
	position: sticky;
	top: 16.5rem;

	@media screen and (max-width: 1024px) {
		padding-left: 2rem;
		top: 10rem;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 0;
	}

	h5 {
		font-family: 'Median', sans-serif;
		font-size: 2.4rem;
		line-height: 3.2rem;
		padding-top: 2rem;
		padding-bottom: 7.2rem;
		margin: 0;

		@media screen and (max-width: 1024px) {
			padding-bottom: 5rem;
		}

		@media screen and (max-width: 768px) {
			padding-bottom: 4rem;
			padding-top: 0;
		}
	}
`;
