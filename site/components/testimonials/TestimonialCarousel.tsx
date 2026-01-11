/* eslint-disable @next/next/no-img-element */
'use client';

import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { playfairDisplay } from '@/app/layout';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

const testimonialData = [
	{
		quote: `I won a MiFi and was also accepted into the 3.0 Technical Writing Cohort. Both have been very impactful. The MiFi helped me stay consistent, and the cohort is helping me grow my Web3 knowledge and writing skills. I'm very thankful for this opportunity.`,
		name: 'Kuti Peace Metalayo',
		imgName: 'kuti-peace-metalayo.jpg',
	},
	{
		quote: `I'm opportuned to be part of the DeFi Skill-up Cohort 3.0 on the project management track. I must say I'm really grateful, because I've learnt a lot in the past weeks and even earned some certificates to the courses they gave us to practice. Thank you so much. God bless WID.`,
		name: 'Abiodun Fathia Ayomide',
		imgName: 'abiodun-fathia-ayomide.jpg',
	},
	{
		quote: `My journey with Women in DeFi has been nothing short of inspiring. Through the community, I've gained deeper knowledge about blockchain, personal growth, and the power of women supporting women. One of the highlights of my experience was winning a WiFi device during the 2025 WID Summit — a reward that not only motivated me but also made it easier for me to keep learning, connecting, and building. WID has truly been a space of empowerment, opportunity, and endless inspiration.`,
		name: 'Peace Toluwanimi Omosehin',
		imgName: 'peaceomosehin.jpg',
	},
	{
		quote: `Being part of Women In DeFi has been truly empowering. Through programs like the Laptop and Wi-Fi support, I've been able to fully engage in Web3 learning, content creation, and community projects.`,
		name: 'Agbonyin Ifeoluwa Grace',
		imgName: 'zoeyblaze5.jpeg',
	},
	{
		quote: `Receiving a laptop sponsorship from Women in DeFi at the 2025 WID Summit changed my Web3 journey completely. Before then, I often struggled with limited tools, even though I had the passion and drive to grow. The moment I got the laptop, it felt like someone finally said, "We believe in you, we see you.......keep going girl💪🏽"`,
		name: 'Ofili Ifeanyi Christabel',
		imgName: 'ofililfean75262.jpg',
	},
	{
		quote: `My journey in Web3 has been one of bold learning and steady growth, and WID played a role in it. Now from being a curious explorer to a community builder, product manager and educator, I have evolved into someone shaping conversations and creating real impact in the decentralized space.`,
		name: 'Okoli Uchechi Vivian',
		imgName: 'qingvee.jpg',
	},
	{
		quote: `I'm still pinching myself, but I'll try to share my story without getting too emotional. Mid 2023, I finished secondary school, and honestly, I was lost. I didn't know what I wanted to do or where I was going. Then, my friend told me about Women in DeFi (WID), and I'm so grateful she did. WID has changed me, inspired me, and influenced me in ways I never thought possible. I'm not where I want to be yet, but I'm not where I used to be, and that's all that matters.`,
		name: 'Victoria John',
		imgName: 'justvictorya.jpg',
	},
	// {
	// 	quote: `WID gave me a community and platform. It gave me a renewed mindset that growth can be attained and sustainable and wealth at a young age is achievable`,
	// 	name: 'HederaWrites',
	// 	imgName: 'hederawrites',  Duplicate image
	// },
	{
		quote: `The Women in DeFi program was my gateway into the Web3 space, providing both clarity and confidence as I began my journey. Beyond technical knowledge, it helped me cultivate diligence, discipline, and excellence in execution. I'm deeply grateful for the opportunity and the empowering community it fostered among women shaping the future of decentralized finance.`,
		name: 'Nikpis',
		imgName: 'nikpis.jpg',
	},
	{
		quote: `I joined WID last year at my lowest, and it has been a guiding light in my journey. Today, I'm working as a marketer for a top tier project, something made possible because WID equipped me with the knowledge, skills, and mindset to take action and succeed in the space. I am proud WID Baddie and I do not take it for granted.`,
		name: 'Keera',
		imgName: 'keera.jpg',
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
								<div className='border border-[#0A74EF80] h-80 overflow-hidden min-h-125 md:h-100 rounded-xl md:rounded-[1.25rem] flex flex-col md:flex-row gap-0 md:gap-12.75'>
									<img
										className={cn(
											'w-full h-full md:w-100 object-cover object-center',
											index === 2 ? 'object-top md:object-center' : ''
										)}
										alt={testimonial.name}
										src={`/images/${testimonial.imgName}`}
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
