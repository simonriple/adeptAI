const path = require('path');

module.exports = {
	debug: process.env.NODE_ENV === 'development',
	i18n: {
		defaultLocale: 'no',
		locales: ['no', 'en'],
	},
	localePath: path.resolve('./public/locales'),
	trailingSlash: true,
};
