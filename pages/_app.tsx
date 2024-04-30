import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/globalStyles';
import '../styles/globals.css';

import { darkTheme, lightTheme } from '../styles/Themes';
import { MainStyled } from '../styles/styles';

function MyApp({ Component, pageProps }: AppProps) {
	const [themeName, setThemeName] = useState('light');

	const themeToggler = () => setThemeName(themeName === 'light' ? 'dark' : 'light');
	const theme = themeName === 'light' ? lightTheme : darkTheme;

	return (
		<>
			<Head>
				<title>🍯</title>
				<meta name="description" content="Adept Concept AS Web site" />
				{/* TODO REMOVE */}
				<meta key="robots" name="robots" content="noindex,follow" />
				<meta key="googlebot" name="googlebot" content="noindex,follow" />
				<title>Adept Concept AS - Compliance Management gjort enkelt</title>
				<link rel="icon" href="/website/AdeptMonogram.png"></link>
				<meta
					name="keywords"
					content="compliance, samsvar, regulatory compliance, lover, forskrifter, standarder, myndighetskrav, ptil, regelverk, weac, offshore, havvind, bygg og anlegg, enkel, software, programvare, saas"
				/>
			</Head>

			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<MainStyled>
					<ParallaxProvider>
						<Component {...pageProps} theme={theme} themeToggler={themeToggler} themeName={themeName} />
					</ParallaxProvider>
				</MainStyled>
			</ThemeProvider>
		</>
	);
}

export default appWithTranslation(MyApp);
