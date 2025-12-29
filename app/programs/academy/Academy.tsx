import { CTA, HeroV2 } from '@/components/common';
import { ProgramsGrid, SuccessStories } from '@/components/programs';

const Academy = () => {
	return (
		<>
			<HeroV2 bgUrl='programs-hero-img.png'>
				<h1 className='text-[2.5rem] font-medium tracking-[1.6px] text-white'>
					WID Academy
				</h1>
				<h4 className='text-[1.25rem] font-normal mb-5 tracking-[.8px] text-white'>
					Learn. Build. Lead.
				</h4>
				<p className='text-white leading-8 font-normal text-[1rem] max-w-260 mx-auto text-center'>
					All of our programs are <b className='font-bold'>FREE</b> and thoughtfully
					crafted to empower African girls and women in the Blockchain space,
					equipping them with the essential technical, non-technical and career
					skills necessary to advance in their respective domains.
				</p>
			</HeroV2>

			<ProgramsGrid />

			<SuccessStories />

			<CTA
				title='Recruit Top Web3 Professionals'
				content={`Connect with and recruit top-tier Web3 professionals whose technical skill and proficiency are matched by unwavering integrity and ethical standards.`}
				cta={{
					text: 'Hire Our Talent',
				}}
			/>
		</>
	);
};

export default Academy;
