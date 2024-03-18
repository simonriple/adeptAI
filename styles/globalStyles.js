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

    @media screen and (min-width: 1900px) {
      font-size: 15px;
    }
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

    p,
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
  `;
