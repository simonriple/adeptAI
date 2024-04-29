import Link from 'next/link';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';
import languageDetector from '../lib/languageDetector';
import { HeaderButtonStyled } from '../styles/styles';

const LanguageSwitchLink = ({ locale, children, ...rest }: PropsWithChildren<{ locale: string; href?: string }>) => {
	const router = useRouter();

	let href = rest.href || router.asPath;
	let pName = router.pathname;
	Object.keys(router.query).forEach((k) => {
		if (k === 'locale') {
			pName = pName.replace(`[${k}]`, locale);
			return;
		}
		pName = pName.replace(`[${k}]`, router.query[k] as string);
	});
	if (locale) {
		href = rest.href ? `/${locale}${rest.href}` : pName;
	}

	return (
		<HeaderButtonStyled as={Link} href={href} onClick={() => languageDetector?.cache?.(locale)} scroll={false}>
			{children}
		</HeaderButtonStyled>
	);
};

export default LanguageSwitchLink;
