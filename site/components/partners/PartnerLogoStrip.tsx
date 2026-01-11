'use client';

/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from 'react';
import { SVGClient } from '../common';

const PartnerLogoStrip = () => {
	const [reducedMotion, setReducedMotion] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		setReducedMotion(mediaQuery.matches);

		const handleChange = (event: MediaQueryListEvent) => {
			setReducedMotion(event.matches);
		};

		mediaQuery.addEventListener('change', handleChange);
		return () => {
			mediaQuery.removeEventListener('change', handleChange);
		};
	}, []);

	const partners = [
		'toyow',
		'nest',
		'mansa',
		'polkadot-africa',
		'stellar',
		'obiex',
		'jupiter',
		'afen',
		'roqqu',
		'miraweb',
		'swift-fiat',
		'web3bridge',
		'felbeth',
		'base-west-africa',
		'atrium',
		'propel',
		'starknet-africa',
		'cartesi',
		'web3ladies',
		'she-code-africa',
		'moonshot',
		'web3afrika',
		'teen-girls-in-blockchain',
		'wetech',
		'bloomone',
		'nirvana',
		'her-dao',
		'web3-lagos-conf',
		'africa-stablecoin-network',
		'aptos-africa',
		'eth-nigeria',
		'trust-wallet',
		'aya',
		'lagos-blockchain-week',
		'careerbuddy',
		'blockfest-africa',
		'nftng',
		'dfs-labs',
	];

	return (
		<section className='bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] py-10 md:py-20 px-0 md:px-10'>
			<h3 className='text-[1.25rem] md:text-[2.5rem] font-semibold text-white text-center mb-6 md:mb-10 px-6 md:px-0'>
				Our Partners
			</h3>

			<div
				data-animated={!reducedMotion}
				className='marquee-container overflow-hidden mx-auto'
			>
				<div className='marquee-inner flex items-center gap-10 w-max'>
					{partners.map((logoUrl, index) => (
						<SVGClient
							key={`__item__${index}`}
							src={`/svg/${logoUrl}.svg`}
						/>
					))}
					{/* Duplicate for seamless loop */}
					{partners.map((logoUrl, index) => (
						<SVGClient
							key={`__item__duplicate__${index}`}
							src={`/svg/${logoUrl}.svg`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export { PartnerLogoStrip };
