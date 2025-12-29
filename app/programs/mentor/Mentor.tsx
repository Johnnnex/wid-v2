/* eslint-disable @next/next/no-img-element */
import { inter } from '@/app/layout';
import { Button, CTA, HeroV2 } from '@/components/common';
import { SuccessStories } from '@/components/programs';
import { cn } from '@/lib/utils';

const Mentor = () => {
	return (
		<>
			<HeroV2 bgUrl='programs-hero-img.png'>
				<h1 className='text-[2.5rem] font-medium tracking-[1.6px] text-white'>
					Be A Mentor
				</h1>
				<h4 className='text-[1.25rem] font-normal mb-5 tracking-[.8px] text-white'>
					Learn. Build. Lead.
				</h4>
				<p className='text-white leading-8 font-normal text-[1rem] max-w-260 mx-auto text-center'>
					Have you successfully navigated the complexities of Web3, DeFi, or the
					broader tech industry? Your experience is invaluable. Mentoring is the most
					direct way to accelerate the careers of aspiring women who are ready to
					build, but just need a guiding voice.
				</p>
			</HeroV2>

			<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-[5rem_11.25rem]'>
				<div className='max-w-350 flex gap-10 items-start mx-auto'>
					<img
						src='/images/programs-img-7.png'
						alt='Meet The Mentors'
						className='w-77 rounded-[1.25rem]'
					/>
					<div className='flex-1'>
						<h3 className='text-[2.5rem] tracking-[1.2px] font-medium'>
							Skill Up Cohort 3.0; The Mentorship Program
						</h3>
						<p
							className={cn(
								inter?.className,
								'text-black leading-8! mb-5 text-justify font-normal text-[1rem]'
							)}
						>
							Women in DeFi is recruiting mentors to join our academy programs
							dedicated to supporting African women pursuing careers in Web3. This
							initiative provides an opportunity to develop leadership and coaching
							skills while creating a lasting impact on the next generation of women in
							Web3. Mentors will be recognized publicly and awarded a certificate of
							contribution. We are seeking mid- to senior-level professionals with at
							least three years of experience in any of our program tracks, who are
							committed to active participation and comfortable with virtual mentorship
							and communication.
						</p>
						<Button className='p-{1.25rem_2.5rem]'>Apply Here</Button>
					</div>
				</div>
			</section>

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

export default Mentor;
