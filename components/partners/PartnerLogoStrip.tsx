import { SVGClient } from '../common';

const PartnerLogoStrip = () => {
	return (
		<section className='px-10 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF] py-20'>
			<h3 className='text-[2.5rem] text-white font-semibold text-center mb-10'>
				Our Partners
			</h3>
			<div className='max-w-350 overflow-auto items-center mx-auto gap-10 justify-between flex'>
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
						src={`/svg/${logoUrl}.svg`}
					/>
				))}
			</div>
		</section>
	);
};

export { PartnerLogoStrip };
