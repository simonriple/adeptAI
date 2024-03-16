/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');
const nextConfig = {
	i18n,
	// output: 'export',
	reactStrictMode: false,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
