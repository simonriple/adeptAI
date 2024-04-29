/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: { unoptimized: true },
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
