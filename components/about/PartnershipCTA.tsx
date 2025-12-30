/* eslint-disable @next/next/no-img-element */
import { inter } from '@/app/layout';
import { Button } from '../common';

const PartnershipCTA = () => {
	return (
		<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-30'>
			<div className='max-w-350 mx-auto'>
				<div className='flex items-center gap-10'>
					<div className='flex-1'>
						<h2 className='text-[2.5rem] text-black mb-5 font-medium'>
							Powering Change Through Collaboration
						</h2>
						<p className={`leading-8 text-[1rem] mb-5 ${inter.className}`}>
							We believe the future of finance is built on connection, not just code or
							straategies. At Women in DeFi, we know that we can&apos;t build a truly
							inclusive decentralized world alone, it takes friends, allies, and shared
							passion. That&apos;s why we pour energy into meaningful partnerships. We
							link arms with amazing industry leaders, innovative tech projects, and
							organizations that share our belief in women&apos;s potential in
							Blockchain and DeFi.
						</p>
						<Button
							url='/partner'
							target='_self'
							className='p-[1.25rem_2.5rem] w-fit'
						>
							Partner with Us
						</Button>
					</div>
					<img
						alt='About Image 6'
						className='flex-1 rounded-[1.25rem]'
						src={'/images/about-img-6.png'}
					/>
				</div>
			</div>
		</section>
	);
};

export { PartnershipCTA };
