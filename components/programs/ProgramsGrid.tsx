'use client';

import { cn } from '@/lib/utils';
import { Button } from '../common';
import { inter } from '@/app/layout';
import { useState } from 'react';

const ProgramsGrid = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<section className='px-20 bg-[url(/images/dust-bg.png)] bg-center bg-cover py-20'>
			<div className='max-w-350 mx-auto'>
				<div className='flex gap-8 bg-[#FAF9FF] w-fit mx-auto rounded-[2.5rem] border border-[#0A74EF33] p-5'>
					{['WID Foundational Trainings', 'Skill-up Training']?.map(
						(buttonText, index) => (
							<button
								key={`__button__${index}`}
								onClick={() => setActiveTab(index)}
								className={cn(
									'w-85.5 transition-all py-3.75 font-normal text-[1rem] duration-[.4s] rounded-[2.5rem]',
									index === activeTab
										? 'bg-[#0A74EF] text-white'
										: 'bg-transparent border text-[#000000B2] border-[#0A74EF33] hover:bg-[#0A74EF08]'
								)}
							>
								{buttonText}
							</button>
						)
					)}
				</div>

				{/* Foundational Trainings  */}
				<div
					className={cn(
						'grid grid-cols-2 mt-20 gap-[2.5rem_3.75rem] transition-opacity duration-300',
						activeTab === 0 ? 'opacity-100' : 'opacity-0 hidden'
					)}
				>
					{[
						{
							title: 'Introduction to Web3',
							content: `This is the foundational six weeks training of Women In DeFi to in-still the fundamental principles of Web3 and decentralized finance. It is mandatory training for all community members. At the end of the training, participants would understand all the basic concepts of Web3 and terminologies.`,
							url: '',
						},
						{
							title: 'Web Development Training',
							content: `This is a foundational front-end development training; it is a prerequisite to our Blockchain development course. Whether you're a newbie or seeking to enhance your HTML, CSS & JavaScript skills, this training is for you.`,
							url: '',
						},
					]?.map((item, index) => (
						<div
							key={`__item__${index}__`}
							className='rounded-[1.25rem] overflow-hidden flex flex-col bg-[#FFFFFF] aspect-[1.16]'
						>
							<figure
								style={{ backgroundImage: `url(/images/about-img-${index + 2}.png)` }}
								className='flex-1 bg-cover'
							/>
							<div className='p-6 min-h-74.5 flex-col flex gap-1'>
								<h4 className='text-black font-medium text-[1.25rem]'>{item?.title}</h4>
								<p
									className={`leading-8 mb-5 font-light text-[1rem] ${inter?.className} text-justify`}
								>
									{item?.content}
								</p>
								<Button className='p-[1.25rem_2.5rem] w-fit'>Apply Here</Button>
							</div>
						</div>
					))}
				</div>

				{/* Skill up training  */}
				<div
					className={cn(
						'rounded-[1.25rem] mt-20 max-w-286.5 mx-auto overflow-hidden flex flex-col bg-[#FFFFFF] aspect-[1.787] transition-opacity duration-300',
						activeTab === 1 ? 'opacity-100' : 'opacity-0 hidden' // JSYK frens, opacity here is redundant, let's not even talk about why I left it :)
					)}
				>
					<figure
						style={{ backgroundImage: `url(/images/about-img-2.png)` }}
						className='flex-1 bg-cover'
					/>
					<div className='p-[1.5rem_1.125rem] items-center flex-col flex gap-1'>
						<h4 className='text-black font-medium mb-1 text-[1.25rem]'>
							Skill-up Training
						</h4>
						<p
							className={`leading-8 mb-5 font-light text-[1rem] ${inter?.className} text-center`}
						>
							This is an all-encompassing 3-4 months educational initiative tailored to
							equip women with the knowledge and skills needed to thrive in the Web3
							technology landscape. It offers a unique opportunity to not only acquire
							essential technical skills but also to harness Web3 to address pressing
							socio-economic challenges across Africa. The training covers tracks
							across Blockchain Development, Product Design, Product Management,
							Project Management, Community Management, Technical Writing and Advanced
							DeFi Research Methodologies.
						</p>
						<Button className='p-[1.25rem_2.5rem] w-fit'>Apply Here</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export { ProgramsGrid };
