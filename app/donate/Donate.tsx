import { HeroV2 } from '@/components/common';
import { Donate as DonateComp } from '@/components/donate';

const Donate = () => {
	return (
		<>
			<HeroV2 bgUrl='partner-hero-img.png'>
				<h1 className='text-[2.5rem] font-medium text-white'>
					Support a Woman. Shape the Future
				</h1>
			</HeroV2>

			<DonateComp />
		</>
	);
};

export default Donate;
