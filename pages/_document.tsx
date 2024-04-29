import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { JSX } from 'react';
import { ServerStyleSheet } from 'styled-components';
import i18nextConfig from '../next-i18next.config';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [initialProps.styles, sheet.getStyleElement()],
			};
		} finally {
			sheet.seal();
		}
	}
	render(): JSX.Element {
		const currentLocale = (this.props.__NEXT_DATA__.query.locale as string) || i18nextConfig.i18n.defaultLocale;
		return (
			<Html lang={currentLocale}>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
