/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { Button } from '@/components/common';
import { cn } from '@/lib/utils';

const PreviousEvents = () => {
	const [activeTab, setActiveTab] = useState(0);

	const events = [
		{
			name: 'Women In DeFi Summit 2025',
			images: [
				'community-img-11.png',
				'community-img-12.png',
				'community-img-13.png',
			],
		},
		{
			name: 'Bitcoin Pizza Day 2024',
			images: [
				'community-img-11.png',
				'community-img-12.png',
				'community-img-13.png',
			],
		},
		{
			name: 'Codes, Charts and Cocktails 2023',
			images: [
				'community-img-11.png',
				'community-img-12.png',
				'community-img-13.png',
			],
		},
	];

	return (
		<section className='px-20 bg-[url(/images/texture-bg-full.png)] bg-center bg-cover py-20'>
			<div className='max-w-350 mx-auto'>
				<div className='flex gap-8 bg-[#FAF9FF] w-fit mx-auto rounded-[2.5rem] border border-[#0A74EF33] p-5'>
					{events.map((event, index) => (
						<button
							key={`__button__${index}`}
							onClick={() => setActiveTab(index)}
							className={cn(
								'px-8 transition-all py-3.75 font-normal text-[1rem] duration-[.4s] rounded-[2.5rem]',
								index === activeTab
									? 'bg-[#0A74EF] text-white'
									: 'bg-transparent border text-[#000000B2] border-[#0A74EF33] hover:bg-[#0A74EF08]'
							)}
						>
							{event.name}
						</button>
					))}
				</div>

				{events.map((event, tabIndex) => (
					<div
						key={`__tab__${tabIndex}`}
						className={cn(
							' mt-10 transition-opacity flex gap-10 duration-300',
							activeTab === tabIndex ? 'opacity-100' : 'opacity-0 hidden'
						)}
					>
						{event.images.map((image, imgIndex) => (
							<div
								key={`__image__${imgIndex}__`}
								className='w-full'
							>
								<img
									src={`/images/${image}`}
									alt={`WID Past Events`}
									className='rounded-[1.25rem] flex-1 aspect-[1.2] object-cover'
								/>
							</div>
						))}
					</div>
				))}

				<div className='flex justify-center mt-10 w-full'>
					<Button
						variant='outlined'
						url='https://drive.google.com/drive/folders/1oglXz-N4YJRUwSpGSwvTF2HfZ80SaV0i'
						className='w-fit'
						icon={{
							url: 'hugeicons:arrow-right-01',
							width: '2rem',
							height: '2rem',
						}}
					>
						View More
					</Button>
				</div>
			</div>
		</section>
	);
};

export { PreviousEvents };
