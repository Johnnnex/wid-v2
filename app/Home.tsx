import { Button, CTA, SVGClient } from '@/components/common';
import {
	AboutOverview,
	DonationCTA,
	ImpactStats,
	PartnershipCTA,
} from '@/components/about';
import { PartnerLogoStrip } from '@/components/partners';
import { TestimonialCarousel } from '@/components/testimonials';
import { inter } from './layout';
import { cn } from '@/lib/utils';

export default function Home() {
	return (
		<>
			<section className='bg-black pt-40'>
				<div className='flex bg-[url(/images/home-hero-img.png)] bg-center bg-cover h-202.5 bg-blend-overlay bg-[#00000099] gap-10 justify-center flex-col items-center'>
					<h1 className='text-white text-[4rem] font-medium w-301 mx-auto text-center'>
						Empowering Women, Decentralizing the Future
					</h1>
					<div className='flex items-center gap-20'>
						<Button
							className='w-58.25 p-[1.25rem_2.5rem]'
							url='https://forms.gle/sVHUHnF9bz42BJui7'
						>
							Join the Movement
						</Button>
						<Button
							url='/donate'
							target='_self'
							variant='outlined'
							className='w-58.25'
						>
							Donate
						</Button>
					</div>
				</div>
			</section>

			<AboutOverview />

			<ImpactStats />

			<PartnershipCTA />

			<PartnerLogoStrip />

			<DonationCTA />

			<TestimonialCarousel />

			<CTA
				title='Tired of building alone?'
				content={`Success in Web3 shouldn't be solitary. Join Women in DeFi: a
					supportive community dedicated to seeing every woman succeed. Connect with
					builders, unlock exclusive resources, and collaboratively shape a more
					equitable industry future.`}
				cta={{
					text: 'Join the Sisterhood',
					url: 'https://forms.gle/sVHUHnF9bz42BJui7',
				}}
			/>

			<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-30'>
				<div className='max-w-350 mx-auto'>
					<h2 className='text-black font-medium text-[2.5rem] text-center mb-10'>
						WID in the news
					</h2>
					<div className='flex border rounded-[1.25rem] overflow-hidden border-[#0A74EF80]'>
						<div className='flex-1 flex flex-col gap-2 p-[2.5rem_.75rem_2.5rem_2.5rem] border-r border-[#0A74EF80]'>
							<h6 className='font-medium text-[1.25rem]'>
								Women in DeFi Marks Three Years of Impact, Education, & Financial
								Inclusion for African Women
							</h6>
							<p className={cn(inter?.className, 'text-[1rem] font-normal')}>
								Women in DeFi, a transformative community founded by Sarah Idahosa, is
								celebrating its third anniversary this month, marking a significant
								milestone in the organization&apos;s mission to empower women...
							</p>
							<Button
								className='p-[1.25rem_2.5rem] w-fit'
								variant='outlined'
								icon={{
									url: 'hugeicons:arrow-right-01',
									width: '2rem',
									height: '2rem',
								}}
							>
								Read More
							</Button>
						</div>
						<figure className='p-[2.5rem_1.375rem] flex items-center'>
							<SVGClient src='/svg/tech-cabal.svg' />
						</figure>
					</div>
				</div>
			</section>
		</>
	);
}
