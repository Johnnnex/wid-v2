import { HeroV2 } from '@/components/common';

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

			<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-20'>
				<div className='max-w-350 mx-auto'>
					<div className='flex gap-8 p-5'>
						{['WID Foundational Trainings', 'Skill-up Training']?.map(
							(item, index) => (
								<button
									key={`__button__${index}`}
									className=''
								></button>
							)
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Academy;
