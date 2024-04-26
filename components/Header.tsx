import { Children, ComponentProps, PropsWithChildren, ReactNode, isValidElement, useState } from 'react';
import { useIsMobile } from '../helpers';
import { HeaderButtonStyled, HeaderMobileNavigation, HeaderNavigation, HeaderStyled } from '../styles/styles';

const filter = (children: ReactNode, displayName: string) =>
	Children.map(children, (child) =>
		isValidElement(child) && (child.type as unknown as { displayName: string }).displayName === displayName ? child : null
	);

const getLogo = (children: ReactNode) => filter(children, 'Logo');

const getLinks = (children: ReactNode) => filter(children, 'Link');

const Header = ({ children, ...headerStyledProps }: PropsWithChildren<ComponentProps<typeof HeaderStyled>>) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const isMobile = useIsMobile();
	const logo = getLogo(children);
	const links = getLinks(children);

	return (
		<HeaderStyled {...headerStyledProps}>
			{logo}
			{isMobile ? (
				menuOpen ? (
					<>
						<HeaderButtonStyled onClick={() => setMenuOpen(false)}>
							<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
								<path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
							</svg>
							<p>Close</p>
						</HeaderButtonStyled>
						<HeaderMobileNavigation>{links}</HeaderMobileNavigation>
					</>
				) : (
					<>
						<HeaderButtonStyled onClick={() => setMenuOpen(true)}>
							<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
								<path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z" />
							</svg>

							<p>Meny</p>
						</HeaderButtonStyled>
					</>
				)
			) : (
				<HeaderNavigation>{links}</HeaderNavigation>
			)}
		</HeaderStyled>
	);
};
const Logo = ({ children }: PropsWithChildren) => children;
Logo.displayName = 'Logo';
Header.Logo = Logo;

const Link = HeaderButtonStyled;
Link.displayName = 'Link';
Header.Link = Link;

export default Header;
