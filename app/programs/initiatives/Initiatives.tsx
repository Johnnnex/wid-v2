import { inter } from '@/app/layout';
import { CTA, HeroV2 } from '@/components/common';
import { SuccessStories } from '@/components/programs';

const Initiatives = () => {
	return (
		<>
			<HeroV2 bgUrl='programs-hero-img.png'>
				<h1 className='text-[2.5rem] font-medium tracking-[1.6px] text-white'>
					Our Initiatives
				</h1>
				<h4 className='text-[1.25rem] font-normal mb-5 tracking-[.8px] text-white'>
					Learn. Build. Lead.
				</h4>
				<p className='text-white leading-8 font-normal text-[1rem] max-w-260 mx-auto text-center'>
					At Women in DeFi (WID), we are not just talking about change—we are
					investing directly in the future of African women in technology. Our
					initiatives are designed to provide both the knowledge and the tools needed
					for any woman willing and able to thrive in the Web3 space, regardless of
					her background or age.
				</p>
			</HeroV2>

			<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-20'>
				<div className='max-w-350 mx-auto'>
					<div
						className={
							'grid grid-cols-2 mt-20 gap-15 transition-opacity duration-300'
						}
					>
						{[
							{
								title: 'WID Goes to School',
								content: `We are committed to empowering young women in secondary and tertiary institutions with knowledge about blockchain technology, helping them understand its impact, explore its possibilities, and discover how to build meaningful careers in the field.`,
							},
							{
								title: 'Laptop Scholarship',
								content: `An initiative that recognizes and supports credible young women with laptops, helping them stay empowered and supported on their journey towards greatness.`,
							},
						]?.map((item, index) => (
							<div
								key={`__item__${index}__`}
								className='rounded-[1.25rem] overflow-hidden flex flex-col bg-[#FFFFFF] aspect-[1.39]'
							>
								<figure
									style={{
										backgroundImage: `url(/images/programs-img-${index + 5}.png)`,
									}}
									className='flex-1 bg-cover'
								/>
								<div className='p-6 min-h-57.5 flex-col flex gap-1'>
									<h4 className='text-black font-medium text-[1.25rem]'>
										{item?.title}
									</h4>
									<p
										className={`leading-8 mb-5 font-light text-[1rem] ${inter?.className} text-justify`}
									>
										{item?.content}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<SuccessStories />

			<CTA
				title='Recruit Top Web3 Professionals'
				content={`Connect with and recruit top-tier Web3 professionals whose technical skill and proficiency are matched by unwavering integrity and ethical standards.`}
				cta={{
					text: 'Hire Our Talent',
					target: '_self',
					url: '/hire-talent',
				}}
			/>
		</>
	);
};

export default Initiatives;
