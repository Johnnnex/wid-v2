/* eslint-disable @next/next/no-img-element */
import { inter } from '@/app/layout';
import { Button } from '@/components/common';
import { SuccessStories } from '@/components/programs';
import { cn } from '@/lib/utils';

const Events = () => {
	return (
		<>
			<section className='pt-39 bg-white'>
				<section className='px-20 bg-[url(/images/texture-bg-fullx2.png)] bg-center bg-cover py-20'>
					<div className='max-w-350 flex gap-20 items-center mx-auto'>
						<div className='flex-1'>
							<h1 className='text-[2.5rem] font-semibold'>Where Change Happens</h1>
							<p
								className={cn(
									inter?.className,
									'mx-auto leading-8! mb-5 font-normal text-[1rem]'
								)}
							>
								We are committed to reaching ambitious women across the region. <br />
								Check our schedule to find events happening both virtually and in major
								tech hubs across Africa. <br />
								Don&apos;t wait for <b className='font-semibold'>permission</b> to{' '}
								<b className='font-semibold'>lead</b>. Find your{' '}
								<b className='font-semibold'>momentum with WID.</b>
							</p>
							<Button className='p-[1.25rem_2.5rem]'>Register for WiD Summit</Button>
						</div>
						<figure className='flex-1'>
							<img
								src={'/images/community-img-10.png'}
								alt='Building Bridges - WID'
								className='w-full border border-[#0A74EF] rounded-[1.25rem] aspect-[1.1024]'
							/>
						</figure>
					</div>
				</section>
			</section>

			<section className='px-20 bg-[url(/images/dust-bg.png)] bg-blend-overlay bg-[#0A74EF1A] bg-center bg-cover py-[5rem_21.25rem]'>
				<div className='max-w-350 mx-auto'>
					<h2 className='font-semibold text-center text-[2.5rem] mb-5'>
						Upcoming Events
					</h2>
					<p
						className={cn(
							inter?.className,
							'text-[1rem] font-normal text-center leading-8! mb-30'
						)}
					>
						Have a quick perusal of our catalogue of upcoming events, and join us.
					</p>
					<p className='text-[2.5rem] font-medium text-black text-center'>
						No upcoming Events at the moment
					</p>
				</div>
			</section>

			<SuccessStories title='Community Stories' />
		</>
	);
};

export default Events;
