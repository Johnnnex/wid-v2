'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { SVGClient } from '../common';

const Footer = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	return (
		<footer className='px-20 bg-[url(/images/texture-bg-full.png)] bg-[#0A74EF33] bg-blend-overlay bg-center bg-cover pt-30'>
			<div className='max-w-350 mx-auto border border-b-0 border-[#0A74EF33] p-[2.5rem_2.5rem_3.125rem_2.5rem] rounded-t-[1.25rem]'>
				<div className='flex justify-between pb-15 border-b-[1.2px] border-[#0A74EF33]'>
					<SVGClient src='/svg/wid-logo-2.svg' />
					{[
						{
							title: 'Get Involved',
							links: [
								{ label: 'Partner with us', url: '' },
								{ label: 'Make a donation', url: '' },
								{ label: 'WID Summit', url: '' },
								{
									label: 'Annual Reports',
									hasDropdown: true,
									dropdownItems: [
										{
											label: '2024 Report',
											url: 'https://drive.google.com/file/d/1SAbv76eM6S4StD1dm5hqQVWlJgLjw5rf/view?usp=sharing',
										},
									],
								},
							],
						},
						{
							title: 'About Us',
							links: [
								{ label: 'About Us', url: '' },
								{ label: 'Code of Conduct', url: '' },
								{ label: 'Our Programs', url: '' },
								{ label: 'Meet the Team', url: '' },
							],
						},
						{
							title: 'Community',
							links: [
								{ label: 'Discord Community', url: '' },
								{ label: 'WID Chapters', url: '' },
								{ label: 'Upcoming Events', url: '' },
								{ label: 'Blog', url: '' },
							],
						},
					].map((section, sectionIndex) => (
						<div key={sectionIndex}>
							<h3 className='font-semibold text-[1.25rem] mb-3 text-black'>
								{section.title}
							</h3>
							<div className='flex flex-col gap-2'>
								{section.links.map((link, linkIndex) => (
									<div key={linkIndex}>
										{link.hasDropdown ? (
											<button
												onClick={() => {
													const dropdownId = `${sectionIndex}-${linkIndex}`;
													setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
												}}
												className='flex items-center gap-2 text-black hover:text-blue-600 transition-colors text-left'
											>
												{link.label}
												<Icon
													icon='hugeicons:arrow-down-01'
													className={`transition-transform duration-300 ${
														openDropdown === `${sectionIndex}-${linkIndex}`
															? 'rotate-180'
															: ''
													}`}
												/>
											</button>
										) : (
											<Link
												href={link.url!}
												className='text-black hover:text-blue-600 transition-colors'
											>
												{link.label}
											</Link>
										)}

										{link.hasDropdown && link.dropdownItems && (
											<div
												className={`overflow-hidden transition-all duration-300 ease-in-out ${
													openDropdown === `${sectionIndex}-${linkIndex}`
														? 'max-h-40 opacity-100 mt-2'
														: 'max-h-0 opacity-0'
												}`}
											>
												<div className='pl-4 flex flex-col gap-2'>
													{link.dropdownItems.map((item, itemIndex) => (
														<a
															key={itemIndex}
															href={item.url}
															target='_blank'
															rel='noopener noreferrer'
															className='text-black hover:text-blue-600 transition-colors text-sm'
														>
															{item.label}
														</a>
													))}
												</div>
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className='pt-5 relative w-full'>
					<span className='flex gap-1 text-[1rem] font-normal text-black items-center w-fit mx-auto'>
						<Icon
							color='#141B340'
							height={'1.5rem'}
							width={'1.5rem'}
							icon={'hugeicons:copyright'}
						/>
						2025 Women In DeFi. All Rights Reserved
					</span>
					<div className='absolute bottom-0 flex gap-6 items-center right-0'>
						{[
							{ url: '', icon: 'hugeicons:new-twitter-rectangle' },
							{ url: '', icon: 'hugeicons:instagram' },
							{ url: '', icon: 'hugeicons:linkedin-01' },
							{ url: '', icon: 'hugeicons:youtube' },
							{ url: '', icon: 'hugeicons:facebook-01' },
							{ url: '', icon: 'hugeicons:mail-01' },
						]?.map((socials, index) => (
							<a
								key={`__social__link__${index}`}
								href={socials?.url}
								target='_blank'
								rel='noopener noreferrer'
							>
								<Icon
									icon={socials?.icon}
									height={'1.5rem'}
									width={'1.5rem'}
									color='#0A74EF'
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
