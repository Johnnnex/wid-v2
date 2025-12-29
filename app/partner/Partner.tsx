/* eslint-disable @next/next/no-img-element */
import { Button, HeroV2 } from '@/components/common';
import { inter } from '../layout';
import { cn } from '@/lib/utils';
import { PartnerLogoGrid } from '@/components/partners';

const Partner = () => {
	return (
		<>
			<HeroV2 bgUrl='partner-hero-img.png'>
				<h1 className='text-[2.5rem] font-medium text-white'>
					Join the Inclusion Movement: Shape the Future of DeFi
				</h1>
			</HeroV2>

			<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-20'>
				<div className='max-w-350 flex gap-17 items-start mx-auto'>
					<img
						src='/images/about-img-6.png'
						alt='WID Ladies'
						className='w-100 aspect-square object-cover rounded-[1.25rem]'
					/>
					<div className='flex-1'>
						<h3 className='text-[2.5rem] font-medium'>
							Your mission meets our impact; become a strategic collaborator.
						</h3>
						<p
							className={cn(
								inter?.className,
								'text-black leading-8! mb-5 text-justify font-normal text-[1rem]'
							)}
						>
							Partnering with the Women in DeFi (WID) community is an active commitment
							to closing the gender gap in blockchain technology. You gain direct
							visibility and brand alignment by supporting our programs, placing your
							organization at the heart of the Web3 inclusion movement. <br /> <br />
							We offer collaboration opportunities; from co-developing curriculum and
							mentorship to funding specific initiatives, that demonstrate your
							organization&apos;s commitment to economic empowerment and a diverse
							digital future. Let&apos;s work together to build a stronger, more
							equitable decentralized finance ecosystem.
						</p>
						<Button className='p-[1.25rem_2.5rem]'>Explore Partnership</Button>
					</div>
				</div>
			</section>

			<PartnerLogoGrid />

			<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-20'>
				<div className='max-w-350 mx-auto'>
					<h2 className='text-[2.5rem] text-center text-black mb-10 font-medium'>
						The Partnership Approach
					</h2>
					<div className='grid grid-cols-2 gap-15'>
						{[
							{
								title: 'Sponsoring A Skill-Up Cohort',
								content: (
									<p className='leading-8 text-justify'>
										Have your protocol/infrastructure taught during a Skill up Cohort,
										co-organize events, support women going to hackathons and Web3 events,
										provide scholarships to advanced training, or reach out to us on other
										sponsorship opportunities
									</p>
								),
								cta: {
									url: 'mailto:partnership@womenindefi.org',
									text: 'Explore Sponsorship',
								},
							},
							{
								title: 'Sponsoring A Skill-Up Cohort',
								content: (
									<p className='leading-8 text-justify'>
										Is your company or organization interested in providing education on
										Web3, Crypto, Defi and NFTs for your employees? We provide customized
										corporate training programs aligned with your Web3 objectives. <br />
										Contact{' '}
										<a
											className='underline'
											href='mailto:sarah@womenindefi.org'
										>
											sarah@womenindefi.org
										</a>{' '}
										today to bring your company to speed on crypto.
									</p>
								),
							},
						]?.map((item, index) => (
							<div
								key={`__item__${index}`}
								className='border flex flex-col gap-5 border-[#0A74EF33] p-10 rounded-[1.25rem]'
							>
								<h4 className='text-black font-semibold text-[1.25rem]'>
									{item?.title}
								</h4>
								<div
									className={cn(inter?.className, 'text-black font-normal text-[1rem]')}
								>
									{item?.content}
								</div>
								{!!item?.cta && (
									<Button
										className='w-fit p-[1.25rem_2.5rem]'
										url={item?.cta?.url}
									>
										{item?.cta?.text}
									</Button>
								)}
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Partner;
