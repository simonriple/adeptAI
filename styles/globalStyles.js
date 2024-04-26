import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'NeutralMono';
    src:
      url('/fonts/PolySans/PolySans-NeutralMono.woff2') format('woff2'),
      url('/fonts/PolySans/PolySans-NeutralMono.woff') format('woff');
  }
  @font-face {
    font-family: 'BulkyWide';
    src:
      url('/fonts/PolySans/PolySans-BulkyWide.woff2') format('woff2'),
      url('/fonts/PolySans/PolySans-BulkyWide.woff') format('woff');
  }
  @font-face {
    font-family: 'Slim';
    src:
      url('/fonts/PolySans/PolySans-Slim.woff2') format('woff2'),
      url('/fonts/PolySans/PolySans-Slim.woff') format('woff');
  }
  @font-face {
    font-family: 'SlimMono';
    src:
      url('/fonts/PolySans/PolySans-SlimMono.woff2') format('woff2'),
      url('/fonts/PolySans/PolySans-SlimMono.woff') format('woff');
  }
  @font-face {
    font-family: 'Median';
    src:
      url('/fonts/PolySans/PolySans-Median.woff2') format('woff2'),
      url('/fonts/PolySans/PolySans-Median.woff') format('woff');
  }
  @font-face {
    font-family: 'Neutral';
    src:
      url('/fonts/PolySans/PolySans-Neutral.woff2') format('woff2'),
      url('/fonts/PolySans/PolySans-Neutral.woff') format('woff');
  }

  *, html {
    scroll-behavior: smooth !important;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 10px;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  span,
  svg,
  header,
  ul,
  li,
  button,
  input,
  textarea {
     transition: all 0.3s ease;
  }

  #eds-autocomplete-container {
    & > div {
      z-index: 10;
    }
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    h1,
    h2,
    strong,
    span {
      color: ${({ theme }) => theme.text} ;
      padding: 0;
      margin: 0;
    }

    input,
    output {
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.text};
    }
  }

  main {
    position: relative;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-family: 'BulkyWide', sans-serif;
    font-size: 8.8rem;
    line-height: 9.6rem;
    
    @media screen and (max-width: 1240px) {
      font-size: 6.8rem;
      line-height: 7.6rem;
    }

    @media screen and (max-width: 768px) {
      font-size: 4.8rem;
      line-height: 5.6rem;
    }
  }

  h2 {
    font-family: 'NeutralMono', sans-serif;
	  font-size: 1.8rem;
  }

  h3 {
    font-size: 4.8rem;
		line-height: 5.6rem;
		font-family: 'BulkyWide', sans-serif;

		@media screen and (max-width: 768px) {
			font-size: 4rem;
			line-height: 4.8rem;
		}
  }

  h4 {
		font-size: 1.8rem;
		line-height: 3.2rem;
		font-family: 'NeutralMono', sans-serif;
	}

  h5 {
    font-size: 2.4rem;
		line-height: 3.2rem;
		font-family: 'Median', sans-serif;

		@media screen and (max-width: 768px) {
			font-size: 2.2rem;
			line-height: 2.4rem;
		}
  }
  

  // p {
	// 	font-size: 2.4rem;
	// 	line-height: 3.2rem;
	// 	font-family: 'Slim', sans-serif;

	// 	@media screen and (max-width: 768px) {
	// 		font-size: 1.6rem;
	// 		line-height: 2.4rem;
	// 	}
	// }

  // p {
	// 	/* font-size: 4rem; */
	// 	font-size: 3.2rem;
	// 	line-height: 5.6rem;
	// 	font-family: 'Slim', sans-serif;
  // @media screen and (max-width: 1240px) {
  //   line-height: 4.2rem;
  // }
	// 	@media screen and (max-width: 768px) {
	// 		font-size: 2.4rem;
	// 		line-height: 3.2rem;
	// 	}
	// }

  span {
    font-size: 1.8rem;
		font-family: 'NeutralMono', sans-serif;
  }

  // span {
	// 	font-size: 1.6rem;
	// 	line-height: 2.4rem;
	// 	font-family: 'Slim', sans-serif;
	// }

  b {
    font-family: 'Median', sans-serif;
  }
  `;
