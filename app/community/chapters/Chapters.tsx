/* eslint-disable @next/next/no-img-element */
import { inter } from '@/app/layout';
import { CTA } from '@/components/common';
import { cn } from '@/lib/utils';

const Chapters = () => {
	return (
		<>
			<section className='pt-39 bg-white'>
				<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-30'>
					<div className='max-w-350 mx-auto'>
						<h1 className='text-[2.5rem] font-semibold text-center mb-3'>
							All Our WID Chapters Across The Globe
						</h1>
						<p
							className={cn(
								inter?.className,
								'text-center w-193.25 mx-auto leading-8! mb-8.25 font-normal text-[1rem]'
							)}
						>
							Join our community and engage with over 8000+ fellow African women in the
							Web3 space, hailing from various corners of the continent.
						</p>
						<div className='grid grid-cols-4 gap-5'>
							{Array.from({ length: 4 }).map((_, colIndex) => {
								const isOddColumn = colIndex % 2 === 0;
								const firstImageIndex = colIndex * 2 + 1;
								const secondImageIndex = colIndex * 2 + 2;

								return (
									<div
										key={`col-${colIndex}`}
										className='grid grid-rows-7 h-125 gap-5'
									>
										<div
											className={cn(
												'relative overflow-hidden rounded-[1.25rem]',
												isOddColumn ? 'row-span-4' : 'row-span-3'
											)}
										>
											<img
												src={`/images/community-img-${firstImageIndex}.png`}
												alt={`Community Image ${firstImageIndex}`}
												className='w-full h-full object-cover'
											/>
										</div>
										<div
											className={cn(
												'relative overflow-hidden rounded-[1.25rem]',
												!isOddColumn ? 'row-span-4' : 'row-span-3'
											)}
										>
											<img
												src={`/images/community-img-${secondImageIndex}.png`}
												alt={`Community Image ${secondImageIndex}`}
												className='w-full h-full object-cover'
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</section>

			<CTA
				title='Start A WID Chapter In Your Region'
				content={`Join a powerful sisterhood dedicated to advancing women in decentralized finance. Connect with talented, like-minded individuals, unlock exclusive resources and events, and actively contribute to shaping an inclusive future for the entire DeFi industry.`}
				className='py-20'
				cta={{
					disabled: true,
					text: 'Start a Chapter (Coming)',
				}}
			/>

			<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-20'>
				<div className='max-w-350 mx-auto'>
					<h2 className='text-black font-semibold mb-3 text-[2.5rem] text-center '>
						WID Chapters
					</h2>
					<p
						className={cn(
							inter?.className,
							'text-black text-[1rem] leading-8! font-normal text-center mb-10'
						)}
					>
						Ready to become a Blockchain Baddie? Join a WID chapter in your region
					</p>
					<div className='grid grid-cols-4 gap-[1.69rem_1.75rem]'>
						{[
							{ title: 'WID Lagos State Chapter', url: '' },
							{ title: 'WID Kano State Chapter', url: '' },
							{ title: 'WID Edo State Chapter', url: '' },
							{ title: 'WID Delta State Chapter', url: '' },
							{ title: 'WID Akwa-Ibom State Chapter', url: '' },
							{ title: 'WID Anambra State Chapter', url: '' },
							{ title: 'WID Abuja State Chapter', url: '' },
							{ title: 'WID Ogun State Chapter', url: '' },
							{ title: 'WID Enugu State Chapter', url: '' },
							{ title: 'WID Osun State Chapter', url: '' },
							{ title: 'WID Plateau State Chapter', url: '' },
							{ title: 'WID Cross Rivers State Chapter', url: '' },
							{ title: 'WID Kogi State Chapter', url: '' },
							{ title: 'WID Bayelsa State Chapter', url: '' },
							{ title: 'WID Oyo State Chapter', url: '' },
							{ title: 'WID Nairobi Chapter', url: '' },
						]?.map((item, index) => (
							<div
								key={`__item__${index}`}
								className='aspect-square flex flex-col rounded-t-[1.25rem] overflow-hidden'
							>
								<figure className='flex-1 bg-no-repeat bg-cover bg-[url(/images/community-img-9.png)]' />
								<div className='flex flex-col items-center bg-white border border-[#0A74EF80] rounded-b-[1.25rem] p-[1.25rem_2.125rem]'>
									<h6 className='text-black text-[1rem] font-normal leading-8!'>
										{item?.title}
									</h6>
									<a
										className='leading-8! text-[1rem] font-normal text-[#0A74EF]'
										href={item?.url}
										target='_blank'
									>
										Join Community
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Chapters;
