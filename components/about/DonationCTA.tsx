/* eslint-disable @next/next/no-img-element */
import { Button } from '../common';
import { inter } from '@/app/layout';

const DonationCTA = () => {
	return (
		<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-30'>
			<div className='max-w-350 mx-auto'>
				<div className='flex items-center gap-10'>
					<img
						className='flex-1 rounded-[1.25rem]'
						alt='About Image 7'
						src={'/images/about-img-7.png'}
					/>
					<div className='flex-1'>
						<h2 className='text-[2.5rem] text-black mb-5 font-medium'>
							Championing Women in DeFi
						</h2>
						<p className={`leading-8 text-[1rem] mb-5 ${inter.className}`}>
							Helping to sponsor our events and initiatives gives us a much needed push
							to empower more African women in Blockchain technology via a donation or
							more. This donation will go a long way in supporting our numerous
							initiatives and facilitating our events and programs across several
							chapters across Africa.
						</p>
						<Button className='p-[1.25rem_2.5rem]'>Donate Now</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export { DonationCTA };
