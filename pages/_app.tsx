import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { appWithTranslation } from 'next-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';

import { GlobalStyles } from '../styles/globalStyles';
import '../styles/globals.css';

import { lightTheme, darkTheme } from '../styles/Themes';


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
					{/* DarkModeSwitcherStyled */}

					<>
						{/* HeaderComponent */}
						<main>
							{/* <ParallaxProvider scrollContainer={scrollEl}> */}
							<ParallaxProvider>
								<Component {...pageProps} theme={theme} themeToggler={themeToggler} themeName={themeName} />
							</ParallaxProvider>
						</main>
						{/* FooterComponent */}
					</>
				</ThemeProvider>
		</>
	);
}

export default appWithTranslation(MyApp);

