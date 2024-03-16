export type ColorThemeProps = {
	body: string;
	text: string;
	fill: string;
	toggleBorder: string;
	boxShadow: string;
	background: string;
	hover: {
		body: string;
		text: string;
		fill: string;
		toggleBorder: string;
		background: string;
	};
};

export type HomePageProps = {
	theme: ColorThemeProps;
	themeName: 'light' | 'dark';
	themeToggler: () => void;
};
