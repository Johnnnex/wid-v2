/* eslint-disable @next/next/no-img-element */
'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { playfairDisplay } from '@/app/layout';
import { Icon } from '@iconify/react';

const testimonialData = [
	{
		quote:
			'WID gave me a community and platform. It gave me a renewed mindset that growth can be attained and sustainable and wealth at a young age is achievable',
		name: 'HederaWrites',
		imgName: 'ivy',
	},
	{
		quote:
			'WID changed my view about blockchain and crypto. A community blessed with great tutors that are patient in explaining and carrying their students along. My Defi journey has been a great one. It all started with #WID',
		name: 'Nemi James',
		imgName: 'ivy',
	},
	{
		quote:
			'WID was the start of my defi journey and the start of my millionaire journey. I discovered so many opportunities that i can leverage to make myself financially stable in the defi space.',
		name: 'Uwadimma Christabel',
		imgName: 'ivy',
	},
	{
		quote:
			'The WID team has not only taught me about Defi but also help me stand my feet in the decentralized finance space through the process of close watch and constant follow-up even after the class.',
		name: 'Lady Benny',
		imgName: 'ivy',
	},
];

const TestimonialCarousel = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: true, dragFree: false, align: 'center' },
		[Autoplay({ delay: 5000, stopOnInteraction: false })]
	);

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section className='px-6 lg:px-20 bg-[url(/images/texture-bg-full.png)] bg-blend-overlay bg-center bg-cover bg-[#0A74EF1A] py-8 md:py-20 lg:py-30'>
			<div className='max-w-350 mx-auto'>
				<h2 className='text-black text-center mb-6 md:mb-10 font-medium text-[1.25rem] md:text-[2.5rem]'>
					What WID Baddies are saying
				</h2>

				<div
					className='embla overflow-hidden'
					ref={emblaRef}
				>
					<div className='embla__container flex'>
						{testimonialData.map((testimonial, index) => (
							<div
								key={`testimonial__${index}`}
								className='embla__slide shrink-0 grow-0 basis-full min-w-0 pl-4 md:pl-6'
							>
								<div className='border border-[#0A74EF80] overflow-hidden min-h-125 md:min-h-100 rounded-xl md:rounded-[1.25rem] flex flex-col md:flex-row gap-0 md:gap-12.75'>
									<img
										className='w-full h-70 md:h-auto md:w-100 object-cover object-top'
										alt={testimonial.name}
										src={`/images/${testimonial.imgName}.png`}
									/>
									<div className='flex-1 flex justify-center flex-col gap-3 md:gap-5 p-6 md:p-0 md:pr-12.75'>
										<p
											className={`text-[0.875rem] md:text-[1.25rem] font-medium ${playfairDisplay.className}`}
										>
											&quot;{testimonial.quote}&quot;
										</p>
										<span className='text-black text-[0.875rem] md:text-[1.25rem] leading-6 md:leading-8 font-semibold'>
											- <b className='font-bold'>{testimonial.name}</b>
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='mt-6 md:mt-10 flex items-center gap-10 md:gap-20 w-fit mx-auto'>
					<button
						className='text-[#0A74EF] hover:opacity-70 transition-opacity'
						onClick={scrollPrev}
						aria-label='Previous testimonial'
					>
						<Icon
							height={'1.5rem'}
							width={'1.5rem'}
							className='md:h-8 md:w-8'
							icon='hugeicons:arrow-left-01'
						/>
					</button>
					<button
						className='text-[#0A74EF] hover:opacity-70 transition-opacity'
						onClick={scrollNext}
						aria-label='Next testimonial'
					>
						<Icon
							height={'1.5rem'}
							width={'1.5rem'}
							className='md:h-8 md:w-8'
							icon='hugeicons:arrow-right-01'
						/>
					</button>
				</div>
			</div>
		</section>
	);
};

export { TestimonialCarousel };
