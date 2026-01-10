import { SVGClient } from '../common';

const PartnerLogoGrid = () => {
	return (
		<section className='px-6 lg:px-10 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] py-8 md:py-20'>
			<h3 className='text-[1.25rem] md:text-[2.5rem] text-white font-semibold md:font-medium tracking-[0.8px] md:tracking-[1.6px] text-center mb-8 md:mb-20'>
				Brands Who Support Our Vision
			</h3>
			<div className='max-w-350 flex-wrap justify-center items-center mx-auto gap-5 md:gap-[3.75rem_2.5rem] flex'>
				{[
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
				]?.map((logoUrl, index) => (
					<SVGClient
						key={`__item__${index}`}
						className='max-w-full overflow-hidden'
						src={`/svg/${logoUrl}.svg`}
					/>
				))}
			</div>
		</section>
	);
};

export { PartnerLogoGrid };
