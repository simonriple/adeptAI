import { send } from '@emailjs/browser';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import GoogleMapReact from 'google-map-react';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import * as Yup from 'yup';

import {
	ContactFormErrorMessageStyled,
	ContactFormInfoStyled,
	ContactFormMessageSentStyled,
	ContactFormWrapperStyled,
	ContactMapWrapperStyled,
	DocumentsGrid,
	DocumentsItem,
	HeaderButtonStyled,
	HeroImageContent,
	HeroRightWrapperStyled,
	HeroSection,
	HeroTitleContent,
	HeroTitleStyled,
	OurCustomersGrid,
	OurCustomersItem,
	OurMissionLeftWrapperStyled,
	OurPartnersGrid,
	OurPartnersItem,
	OurPartnersWrapperStyled,
	OurValuesLeftWrapperStyled,
	OurVisionLeftWrapperStyled,
	ReCAPTCHAContainer,
	ScrollDownStyled,
	StyledContent,
	StyledContentTitle,
	TestimonialsElementLeftStyled,
	TestimonialsElementRightStyled,
	TestimonialsElementStyled,
	TestimonialsElementWrapperStyled,
	TestimonialsInfoStyled,
	TestimonialsListStyled,
	Text,
} from '../../styles/styles';

import ReCAPTCHA from 'react-google-recaptcha';

import Header, { Section } from '../../components';
import LanguageSwitchLink from '../../components/LanguageSwitchLink';
import { useIsMobile } from '../../helpers';
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
import { HomePageProps } from '../../types';

const CUSTOMERS = [
	{
		name: 'noble',
		alt: 'Noble logo',
		url: 'https://www.noblecorp.com/',
	},
	{
		name: 'skanska',
		alt: 'Skanska logo',
		url: 'https://www.skanska.no/',
	},
	{
		name: 'coor',
		alt: 'Coor logo',
		url: 'https://www.coor.no/',
	},
	{
		name: 'speira',
		alt: 'Speira logo',
		url: 'https://www.speira.com/',
	},
	{
		name: 'bulk',
		alt: 'Bulk logo',
		url: 'https://bulkinfrastructure.com/',
	},
	{
		name: 'odfjelldrilling',
		alt: 'Odfjell Drilling logo',
		url: 'https://www.odfjelldrilling.com/',
	},
	{
		name: 'odfjeloceanwind',
		alt: 'Odfjel Oceanwind logo',
		url: 'https://odfjelloceanwind.com/',
	},
	{
		name: 'odfjelltechnology',
		alt: 'Odfjell Technology logo',
		url: 'https://www.odfjelltechnology.com/',
	},
	{
		name: 'implenia',
		alt: 'Implenia logo',
		url: 'https://implenia.com/no-no/',
	},
	{
		name: 'bilfinger',
		alt: 'Bilfinger logo',
		url: 'https://www.bilfinger.com/en/',
	},
	{
		name: 'repsol',
		alt: 'Repsol logo',
		url: 'https://www.repsol.com/en/index.cshtml',
	},
	{
		name: 'valaris',
		alt: 'Valaris logo',
		url: 'https://www.valaris.com/home/default.aspx',
	},
	{
		name: 'abb',
		alt: 'ABB logo',
		url: 'https://new.abb.com/no',
	},
	{
		name: 'imc',
		alt: 'IMC diving logo',
		url: 'https://www.cosl.no/',
	},
	{
		name: 'cosl',
		alt: 'Cosl logo',
		url: 'https://www.deepwater.com/',
	},
	{
		name: 'transocean',
		alt: 'Transocean logo',
		url: 'https://fmgruppen.no/imc-diving/',
	},
];

const DOCUMENTS = [
	{
		name: 'lovdata',
		alt: 'Lovdata logo',
		url: 'https://lovdata.no/',
	},
	{
		name: 'standardnorge',
		alt: 'Standard Norge logo',
		url: 'https://standard.no/',
	},
	{
		name: 'dnv',
		alt: 'dnv logo',
		url: 'https://www.dnv.no/',
	},
];

const PARTNERS = [
	{
		name: 'proactima',
		alt: 'Proactima logo',
		url: 'https://proactima.com/',
	},
	{
		name: 'webstep',
		alt: 'webstep logo',
		url: 'https://www.webstep.no/',
	},
	{
		name: 'rigpartner',
		alt: 'rigpartner logo',
		url: 'https://rig-partner.no/',
	},
];

const defaultProps = {
	center: {
		lat: 60.390318,
		lng: 5.33324,
	},
	zoom: 14,
};

const Home: NextPage<HomePageProps> = ({ theme, themeToggler, themeName }) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [messageSent, setMessageSent] = useState(false);

	const { t, i18n } = useTranslation();
	const customers = t('customers', { returnObjects: true });
	const aboutUsRef = useRef<HTMLElement>(null);
	const ourSolutionRef = useRef<HTMLElement>(null);
	const ourCustomersRef = useRef<HTMLElement>(null);
	const ourPartnersRef = useRef<HTMLElement>(null);
	const testimonialsRef = useRef<HTMLElement>(null);
	const contactRef = useRef<HTMLElement>(null);

	const isMobile = useIsMobile();

	const PinComponent = () => (
		<div
			style={{
				color: 'white',
				background: 'url(/images/logo.svg)',
				backgroundRepeat: 'no-repeat',
				display: 'inline-flex',
				width: '70px',
				height: '100px',
			}}
		/>
	);

	const validationSchema = Yup.object({
		contactFormName: Yup.string().required('Required'),
		contactFormEmail: Yup.string().email('Invalid email address').required('Required'),
		contactFormMessage: Yup.string().required('Required'),
		recaptcha: Yup.string().required('Please verify that you are not a robot'),
	});

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		let timerId: NodeJS.Timeout;

		if (messageSent) {
			timerId = setTimeout(() => {
				setMessageSent(false);
			}, 10000);
		}

		// Clear the timer when the component unmounts
		return () => {
			if (timerId) {
				clearTimeout(timerId);
			}
		};
	}, [messageSent]);

	return (
		<>
			<Header hasScrolling={isScrolled}>
				<Header.Logo>
					<svg
						viewBox="0 0 137 32"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						<path d="M124.79 7.74831H126.389V11.1273H127.782V7.74831H129.382V6.49683H124.79V7.74831Z" />
						<path d="M134.214 6.49683L133.392 9.24466C133.349 9.40245 133.283 9.73437 133.283 9.89217C133.283 9.97923 133.262 10.0717 133.131 10.0717C133 10.0717 132.973 9.98467 132.973 9.89217C132.973 9.73437 132.93 9.40245 132.886 9.24466L132.043 6.49683H129.801V11.1219H131.199V8.79848C131.199 8.51009 131.069 7.94964 130.976 7.74831C130.911 7.66125 130.976 7.56875 131.063 7.54699C131.15 7.52522 131.216 7.59052 131.243 7.66125L132.282 11.1273H133.969L135.036 7.66125C135.057 7.59596 135.123 7.52522 135.215 7.54699C135.302 7.56875 135.346 7.66125 135.302 7.74831C135.215 7.94964 135.057 8.51009 135.057 8.79848V11.1219H136.477V6.49683H134.214Z" />
						<path d="M0 11.1165H14.6533C15.7579 11.1165 16.6557 12.0143 16.6557 13.1189V25.4923H22.5703V13.0373C22.5703 9.43514 19.6484 6.50775 16.0408 6.50775H0V11.1165Z" />
						<path d="M13.935 20.8835H7.91702C6.81245 20.8835 5.91464 19.9857 5.91464 18.8811V14.6696H0V18.9628C0 22.5649 2.92195 25.4923 6.5295 25.4923H12.3081L13.9405 20.8835H13.935Z" />
						<path d="M33.0012 11.1165H37.3977L39.0301 6.50774H31.532C27.9408 6.50774 25.0243 9.41881 25.0243 13.0155V18.9791C25.0243 22.5758 27.9408 25.4923 31.5375 25.4923H47.6V0H41.6854V20.8835H33.0229C31.8748 20.8835 30.9389 19.9531 30.9389 18.7995V13.1842C30.9389 12.0415 31.8639 11.1165 33.0066 11.1165H33.0012Z" />
						<path d="M89.6447 20.8835H85.2481L83.6157 25.4923H91.1138C94.705 25.4923 97.6215 22.5812 97.6215 18.9845V13.0209C97.6215 9.42426 94.705 6.50775 91.1084 6.50775H75.0458V32H80.9604V11.1165H89.6229C90.771 11.1165 91.7069 12.0469 91.7069 13.2005V18.8159C91.7069 19.9585 90.7819 20.8835 89.6392 20.8835H89.6447Z" />
						<path d="M106.502 11.1165H122.613V6.50776H106.502V1.62695H100.587V18.9737C100.587 22.5703 103.503 25.4923 107.106 25.4923H116.105C119.702 25.4923 122.619 22.5758 122.619 18.9791V14.6696H116.704V18.7995C116.704 19.9476 115.773 20.8835 114.62 20.8835H108.586C107.437 20.8835 106.502 19.9531 106.502 18.7995V11.1165Z" />
						<path d="M64.8107 11.1165L62.1445 18.4187H68.0592L72.4122 6.50775L64.8107 11.1165Z" />
						<path d="M72.4122 20.8835H57.8351C56.687 20.8835 55.7511 19.9531 55.7511 18.7995V13.1842C55.7511 12.0415 56.6761 11.1165 57.8187 11.1165H70.2357L72.4122 6.50775H56.3442C52.7529 6.50775 49.8364 9.41882 49.8364 13.0155V18.9791C49.8364 22.5758 52.7529 25.4923 56.3496 25.4923H72.4122V20.8835Z" />
					</svg>
				</Header.Logo>
				<Header.Button onClick={() => aboutUsRef?.current?.scrollIntoView({ behavior: 'smooth' })}>
					<Text size="small">{t('aboutUsLink')}</Text>
				</Header.Button>
				<Header.Button onClick={() => ourSolutionRef?.current?.scrollIntoView({ behavior: 'smooth' })}>
					<Text size="small">{t('ourSolutionLink')}</Text>
				</Header.Button>
				<Header.Button onClick={() => ourCustomersRef?.current?.scrollIntoView({ behavior: 'smooth' })}>
					<Text size="small">{t('ourCustomersLink')}</Text>
				</Header.Button>
				<Header.Button onClick={() => ourPartnersRef?.current?.scrollIntoView({ behavior: 'smooth' })}>
					<Text size="small">{t('ourPartnersLink')}</Text>
				</Header.Button>
				<Header.Button onClick={() => testimonialsRef?.current?.scrollIntoView({ behavior: 'smooth' })}>
					<Text size="small">{t('testimonialsLink')}</Text>
				</Header.Button>
				<Header.Button onClick={() => contactRef?.current?.scrollIntoView({ behavior: 'smooth' })}>
					<Text size="small">{t('contactLink')}</Text>
				</Header.Button>
				<Header.Link>
					<LanguageSwitchLink locale={i18n.language === 'en' ? 'no' : 'en'}>
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
							<path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" />
						</svg>
						<Text size="small">{i18n.language === 'en' ? 'NB' : 'EN'}</Text>
					</LanguageSwitchLink>
				</Header.Link>
				<Header.Link>
					<HeaderButtonStyled
						as={'a'}
						href="https://client.adeptconcept.com/Adept3/Identity/Account/Login?ReturnUrl=%2FAdept3"
						target="_blank"
						rel="noreferrer noopener">
						<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
							<path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
						</svg>

						<Text size="small">{t('signin')}</Text>
					</HeaderButtonStyled>
				</Header.Link>
			</Header>

			<HeroSection>
				<HeroTitleContent width={42}>
					<Parallax
						disabled={isMobile}
						speed={100}
						translateY={['0', '20%']}
						opacity={[1, -1]}
						shouldAlwaysCompleteAnimation
						startScroll={0}>
						<StyledContentTitle display="onlyDesktop">{t('heroSubTitle')}</StyledContentTitle>
					</Parallax>

					<Parallax disabled={isMobile} translateY={['0', '20%']} shouldAlwaysCompleteAnimation startScroll={0}>
						<HeroTitleStyled dangerouslySetInnerHTML={{ __html: t('heroTitle') }} />
						<Text>{t('heroDescription')}</Text>
					</Parallax>
					<Parallax disabled={isMobile} speed={-100} translateY={['0', '-50%']} opacity={[1, -1]} shouldAlwaysCompleteAnimation>
						<ScrollDownStyled onClick={() => aboutUsRef?.current?.scrollIntoView({ behavior: 'smooth' })}>
							<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
								<path d="M7 0V12.175L1.4 6.575L0 8L8 16L16 8L14.6 6.575L9 12.175V0H7Z" />
							</svg>
							<span>{t('scrollDown')}</span>
						</ScrollDownStyled>
					</Parallax>
				</HeroTitleContent>
				<HeroImageContent width={58}>
					<StyledContentTitle display="onlyMobile">{t('heroSubTitle')}</StyledContentTitle>
					<HeroRightWrapperStyled>
						<Image
							src="/images/hero.jpeg"
							alt="Man with his hands up watching the sun set "
							fill
							style={{ objectFit: 'cover', objectPosition: 'center' }}
						/>
					</HeroRightWrapperStyled>
				</HeroImageContent>
			</HeroSection>

			<Section appearance="sand" ref={aboutUsRef}>
				<StyledContent width={55}>
					<StyledContentTitle display="onlyMobile">{t('ourStory')}</StyledContentTitle>
					<Parallax disabled={isMobile} translateY={['0', '10%']} shouldAlwaysCompleteAnimation startScroll={0}>
						<OurMissionLeftWrapperStyled>
							<Image
								src="/images/mission.jpeg"
								alt="Two construction workers in safety gear reviewing plans on a digital tablet"
								fill
								style={{ objectFit: 'cover' }}
							/>
						</OurMissionLeftWrapperStyled>
					</Parallax>
				</StyledContent>
				<StyledContent width={45}>
					<StyledContentTitle display="onlyDesktop">{t('ourStory')}</StyledContentTitle>
					<Text size="large">{t('ourStoryDescription')}</Text>
				</StyledContent>
			</Section>

			<Section ref={ourSolutionRef}>
				<StyledContent width={50}>
					<Parallax disabled={isMobile} translateY={['0', '10%']} shouldAlwaysCompleteAnimation startScroll={0}>
						<StyledContentTitle>{t('ourMission')}</StyledContentTitle>
						<Text size="large">{t('ourMissionDescription')}</Text>
					</Parallax>
				</StyledContent>
				<StyledContent width={50}>
					<div style={{ width: '100%', padding: '56.25% 0 0 0', position: 'relative' }}>
						<iframe
							title="Vimeo video player"
							src={
								i18n.language === 'no'
									? 'https://player.vimeo.com/video/739633714?h=1ff6a1ed81'
									: 'https://player.vimeo.com/video/375415275?h=eb33eb680b'
							}
							frameBorder={0}
							allow="autoplay; fullscreen"
							allowFullScreen
							style={{ borderRadius: '2.5rem', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></iframe>
					</div>
				</StyledContent>
			</Section>

			<Section appearance="dark">
				<StyledContent width={40}>
					<OurVisionLeftWrapperStyled>
						<Image
							src="/images/ai.jpeg"
							alt="A climber reaching to another climber for help"
							fill
							style={{ objectFit: 'cover', objectPosition: '55% 50%' }}
						/>
					</OurVisionLeftWrapperStyled>
				</StyledContent>

				<StyledContent width={60}>
					<h3>{t('ourVision')}</h3>
					<Text dangerouslySetInnerHTML={{ __html: t('ourVisionDescription') }} />
				</StyledContent>
			</Section>

			<Section>
				<StyledContent width={50}>
					<Parallax disabled={isMobile} translateY={['0', '30%']} shouldAlwaysCompleteAnimation startScroll={0}>
						<h4>{t('ourValues')}</h4>
						<Text size="large">{t('ourValuesDescription')}</Text>
					</Parallax>
				</StyledContent>
				<StyledContent width={50}>
					<Parallax disabled={isMobile} translateY={['0', '10%']} shouldAlwaysCompleteAnimation startScroll={0}>
						<OurValuesLeftWrapperStyled>
							<Image src="/images/values.jpeg" alt="A group of people standing on a mountain" fill style={{ objectFit: 'cover' }} />
						</OurValuesLeftWrapperStyled>
					</Parallax>
				</StyledContent>
			</Section>

			<Section appearance="sand" ref={ourCustomersRef}>
				<StyledContent width={35}>
					<StyledContentTitle display="onlyMobile">{t('ourCustomers')}</StyledContentTitle>
					<OurValuesLeftWrapperStyled>
						<Image
							src="/images/values.jpeg"
							alt="A group of people standing on a mountain"
							fill
							style={{ objectFit: 'cover', objectPosition: '85% 50%' }}
						/>
					</OurValuesLeftWrapperStyled>
				</StyledContent>
				<StyledContent width={65}>
					<StyledContentTitle display="onlyDesktop">{t('ourCustomers')}</StyledContentTitle>
					<Text size="large">{t('ourCustomersDescription')}</Text>
				</StyledContent>
			</Section>

			<Section>
				<OurCustomersGrid>
					{CUSTOMERS.map(({ name, alt, url }) => (
						<OurCustomersItem key={name}>
							<Parallax opacity={[0, 3]} shouldAlwaysCompleteAnimation startScroll={200} style={{ width: '100%', height: '100%' }}>
								<a href={url} target="_blank" rel="noopener noreferrer">
									<Image src={`/images/customers/${name}.png`} alt={alt} fill style={{ objectFit: 'contain' }} />
								</a>
							</Parallax>
						</OurCustomersItem>
					))}
				</OurCustomersGrid>
			</Section>

			<Section appearance="dark" ref={ourPartnersRef}>
				<OurPartnersWrapperStyled>
					<Parallax opacity={[0, 3]} shouldAlwaysCompleteAnimation startScroll={0} style={{ width: '100%' }}>
						<h3>{t('ourPartners')}</h3>
					</Parallax>
					<Parallax opacity={[0, 3]} shouldAlwaysCompleteAnimation startScroll={0} style={{ width: '100%' }}>
						<Text>{t('ourPartnersDescription')}</Text>
					</Parallax>
					<OurPartnersGrid>
						{PARTNERS.map(({ name, alt, url }) => (
							<OurPartnersItem key={name}>
								<Parallax opacity={[0, 3]} shouldAlwaysCompleteAnimation startScroll={0} style={{ width: '100%', height: '100%' }}>
									<a href={url} target="_blank" rel="noopener noreferrer">
										<Image src={`/images/partners/${name}.png`} alt={alt} fill style={{ objectFit: 'contain' }} />
									</a>
								</Parallax>
							</OurPartnersItem>
						))}
					</OurPartnersGrid>
				</OurPartnersWrapperStyled>
			</Section>

			<Section appearance="sand">
				<StyledContent width={50}>
					<StyledContentTitle display="onlyMobile">{t('documents')}</StyledContentTitle>

					<DocumentsGrid>
						{DOCUMENTS.map(({ name, alt, url }) => (
							<DocumentsItem key={name}>
								<Parallax opacity={[0, 3]} shouldAlwaysCompleteAnimation startScroll={200} style={{ width: '100%', height: '100%' }}>
									<a href={url} target="_blank" rel="noopener noreferrer">
										<Image src={`/images/documents/${name}.png`} alt={alt} fill style={{ objectFit: 'contain' }} />
									</a>
								</Parallax>
							</DocumentsItem>
						))}
					</DocumentsGrid>
				</StyledContent>
				<StyledContent width={50}>
					<StyledContentTitle display="onlyDesktop">{t('documents')}</StyledContentTitle>
					<Text size="large" dangerouslySetInnerHTML={{ __html: t('documentsDescription') }} />

					<Text size="small" style={{ paddingTop: '2rem' }}>
						{t('documentsInfo')}
					</Text>
				</StyledContent>
			</Section>

			<Section ref={testimonialsRef}>
				<StyledContent>
					<h3>{t('customerTestimonials')}</h3>

					<TestimonialsListStyled>
						{(customers as Array<any>).map(({ title, description, name, role, company, image }) => (
							<TestimonialsElementStyled key={name}>
								<TestimonialsElementLeftStyled>
									<h4>{t('customerTitle')}</h4>
									<TestimonialsElementWrapperStyled>
										<Image src={`/images/testimonials/${image}.png`} alt={name} fill style={{ objectFit: 'contain' }} />
									</TestimonialsElementWrapperStyled>
								</TestimonialsElementLeftStyled>
								<TestimonialsElementRightStyled>
									<h5>{title}</h5>
									<Text size="medium" dangerouslySetInnerHTML={{ __html: description }} />

									<TestimonialsInfoStyled>
										<Text size="medium">
											<b>{name}</b>
										</Text>
										<Text size="medium">{company}</Text>
										<Text size="medium">{role}</Text>
									</TestimonialsInfoStyled>
								</TestimonialsElementRightStyled>
							</TestimonialsElementStyled>
						))}
					</TestimonialsListStyled>
				</StyledContent>
			</Section>

			<Section appearance="dark" ref={contactRef}>
				<h3 style={{ width: '100%' }}>
					<Parallax opacity={[0, 3]} shouldAlwaysCompleteAnimation startScroll={0} style={{ width: '100%' }}>
						{t('contactUs')}
					</Parallax>
				</h3>
				<StyledContent width={50}>
					<Parallax opacity={[0, 5]} shouldAlwaysCompleteAnimation startScroll={0} style={{ width: '100%' }}>
						<ContactMapWrapperStyled>
							<GoogleMapReact
								bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY ?? '' }}
								defaultCenter={defaultProps.center}
								defaultZoom={defaultProps.zoom}>
								<PinComponent />
							</GoogleMapReact>
						</ContactMapWrapperStyled>
					</Parallax>
				</StyledContent>
				<StyledContent width={50}>
					<Parallax opacity={[0, 5]} shouldAlwaysCompleteAnimation startScroll={0} style={{ width: '100%' }}>
						<h5>{t('contactFormTile')}</h5>
						<ContactFormWrapperStyled>
							<Formik
								initialValues={{ contactFormName: '', contactFormEmail: '', contactFormMessage: '', recaptcha: '' }}
								validationSchema={validationSchema}
								onSubmit={(values, { setSubmitting, resetForm }) => {
									send('AdeptSMTPService', 'AdeptWebFeedback', values, process.env.NEXT_PUBLIC_EMAILJS_KEY ?? '')
										.then((_) => {
											setSubmitting(false);
											setMessageSent(true);
											resetForm();
										})
										.catch((_) => {
											setSubmitting(false);
										});
								}}>
								{({ isSubmitting, setFieldValue }) => (
									<Form>
										<ContactFormMessageSentStyled show={messageSent}>{t('formMessageSent')}</ContactFormMessageSentStyled>
										<ContactFormErrorMessageStyled>
											<ErrorMessage name="contactFormName" component="div" />
										</ContactFormErrorMessageStyled>
										<Field type="text" name="contactFormName" placeholder={t('formName')} />

										<ContactFormErrorMessageStyled>
											<ErrorMessage name="contactFormEmail" component="div" />
										</ContactFormErrorMessageStyled>
										<Field type="email" name="contactFormEmail" placeholder={t('formEmail')} />

										<ContactFormErrorMessageStyled>
											<ErrorMessage name="contactFormMessage" component="div" />
										</ContactFormErrorMessageStyled>
										<Field as="textarea" name="contactFormMessage" placeholder={t('formMessage')} />

										<ContactFormErrorMessageStyled>
											<ErrorMessage name="recaptcha" component="div" />
										</ContactFormErrorMessageStyled>

										<ReCAPTCHAContainer>
											<ReCAPTCHA
												sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ''}
												theme="dark"
												onChange={(value) => {
													setFieldValue('recaptcha', value);
												}}
											/>
										</ReCAPTCHAContainer>

										<button type="submit" disabled={isSubmitting}>
											{t('formSubmit')}
										</button>
									</Form>
								)}
							</Formik>
						</ContactFormWrapperStyled>
						<ContactFormInfoStyled>
							<Text size="medium">
								{t('formInfoPhone')} <a href="tel:+4755706323">+47 55 70 63 23</a>
							</Text>
							<Text size="medium">
								{t('formInfoEmail')}{' '}
								<a href="mailto:%70%6F%73%74%40%61%64%65%70%74%63%6F%6E%63%65%70%74%2E%63%6F%6D">post@adeptconcept.com</a>
							</Text>
						</ContactFormInfoStyled>
					</Parallax>
				</StyledContent>
			</Section>
		</>
	);
};

const getStaticProps = makeStaticProps();
export { getStaticPaths, getStaticProps };

export default Home;
