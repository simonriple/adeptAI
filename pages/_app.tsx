import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/globalStyles';
import '../styles/globals.css';

import { darkTheme, lightTheme } from '../styles/Themes';

function MyApp({ Component, pageProps }: AppProps) {
	const [themeName, setThemeName] = useState('light');

	const themeToggler = () => setThemeName(themeName === 'light' ? 'dark' : 'light');
	const theme = themeName === 'light' ? lightTheme : darkTheme;

	return (
		<>
			<Head>
				<title>🍯</title>
				<meta name="description" content="description" />
				<meta key="robots" name="robots" content="noindex,follow" />
				<meta key="googlebot" name="googlebot" content="noindex,follow" />
				<title>Adept Concept AS - Compliance Management gjort enkelt</title>
				<link rel="icon" href="/website/Adept-logo-icon.svg"></link>
				{/* ADD SEO */}
				{/* <meta name="viewport" content="width=device-width,initial-scale=1"> */}
				{/* <meta name="keywords" content="compliance, samsvar, regulatory compliance, lover, forskrifter, standarder, myndighetskrav, ptil, regelverk, weac, offshore, havvind, bygg og anlegg, enkel, software, programvare, saas"> */}
				{/* <meta name="description" content="Adept Concept AS Web site"> */}
			</Head>

			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<main>
					<ParallaxProvider>
						<Component {...pageProps} theme={theme} themeToggler={themeToggler} themeName={themeName} />
					</ParallaxProvider>
				</main>
			</ThemeProvider>
		</>
	);
}

export default appWithTranslation(MyApp);
