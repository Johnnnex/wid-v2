/* eslint-disable @next/next/no-img-element */
import { playfairDisplay } from '@/app/layout';
import { Icon } from '@iconify/react';

const TestimonialCarousel = () => {
	return (
		<section className='px-20 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF1A] py-30'>
			<div className='max-w-350 mx-auto'>
				<h2 className='text-black text-center mb-10 font-medium text-[2.5rem]'>
					What WID Baddies are saying
				</h2>
				<div className='border border-[#0A74EF80] overflow-hidden h-100 rounded-[1.25rem] flex gap-12.75'>
					<img
						className='w-100'
						alt='Ivy E.'
						src={'/images/ivy.png'}
					/>
					<div className='flex-1 flex justify-center flex-col gap-5'>
						<p
							className={`text-[1.25rem] font-medium ${playfairDisplay.className} pr-12.75`}
						>
							“WID gave me a community and platform. It gave me a renewed mindset that
							growth can be attained and sustainable and wealth at a young age is
							achievable”
						</p>
						<span className='text-black text-[1.25rem] leading-8 font-semibold'>
							- <b className='font-bold'>HederaWrites</b>
						</span>
					</div>
				</div>
				<div className='mt-10 flex items-center gap-20 w-fit mx-auto'>
					{[
						{ icon: 'hugeicons:arrow-left-01', onClick: () => {} },
						{ icon: 'hugeicons:arrow-right-01', onClick: () => {} },
					]?.map((navItems, index) => (
						<button
							className='text-[#0A74EF]'
							key={`__nav__item__${index}__`}
						>
							<Icon
								height={'2rem'}
								width={'2rem'}
								icon={navItems?.icon}
							/>
						</button>
					))}
				</div>
			</div>
		</section>
	);
};

export { TestimonialCarousel };
