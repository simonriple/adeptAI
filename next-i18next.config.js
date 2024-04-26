const path = require('path');

module.exports = {
	debug: process.env.NODE_ENV === 'development',
	i18n: {
		localeDetection: false,
		// defaultLocale: 'default',
		defaultLocale: 'nb',
		locales: ['en', 'nb'],
	},
	localePath: path.resolve('./public/locales'),
	trailingSlash: true,
};
