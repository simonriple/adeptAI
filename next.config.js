/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');
const nextConfig = {
	i18n,
	// output: 'export',
	publicRuntimeConfig: {
		NEXT_PUBLIC_GOOGLE_MAP_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
		NEXT_PUBLIC_RECAPTCHA_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
		NEXT_PUBLIC_EMAILJS_KEY: process.env.NEXT_PUBLIC_EMAILJS_KEY,
	},
	env: {
		NEXT_PUBLIC_GOOGLE_MAP_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY,
		NEXT_PUBLIC_RECAPTCHA_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
		NEXT_PUBLIC_EMAILJS_KEY: process.env.NEXT_PUBLIC_EMAILJS_KEY,
	},
	reactStrictMode: false,
	swcMinify: true,
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
