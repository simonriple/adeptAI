import type { NextPage } from 'next';
import Head from 'next/head';

import { Section } from '../components';

const Custom404: NextPage = () => {
	return (
		<>
			<Head>
				<title>🍯 404 </title>
				<meta name="description" content="Page not found" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="robots" content="noindex,nofollow" />
			</Head>

			<Section>
				<h1> 404 - Page Not Found!</h1>
			</Section>
		</>
	);
};

export default Custom404;
