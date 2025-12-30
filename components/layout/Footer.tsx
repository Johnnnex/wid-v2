'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SVGClient } from '../common';

const Footer = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const pathname = usePathname();

	const isActiveLink = (url: string) => {
		if (!url) return false;
		return pathname === url || pathname.startsWith(url + '/');
	};

	const isAbsoluteUrl = (url: string) => {
		return url.startsWith('http://') || url.startsWith('https://');
	};

	const renderLink = (
		link:
			| {
					label: string;
					url: string;
					hasDropdown?: undefined;
					dropdownItems?: undefined;
			  }
			| {
					label: string;
					hasDropdown: boolean;
					dropdownItems: {
						label: string;
						url: string;
					}[];
					url?: undefined;
			  }
	) => {
		if (!link.url) {
			return (
				<span className='text-gray-400 cursor-not-allowed'>{link.label}</span>
			);
		}

		const isActive = isActiveLink(link.url);
		const baseClasses = 'transition-colors block';
		const activeClasses = isActive
			? 'text-blue-600 font-medium'
			: 'text-black hover:text-blue-600';

		if (isAbsoluteUrl(link.url)) {
			return (
				<a
					href={link.url}
					target='_blank'
					rel='noopener noreferrer'
					className={`${baseClasses} ${activeClasses}`}
				>
					{link.label}
				</a>
			);
		}

		return (
			<Link
				href={link.url}
				className={`${baseClasses} ${activeClasses}`}
			>
				{link.label}
			</Link>
		);
	};

	return (
		<footer className='px-20 bg-[url(/images/texture-bg-full.png)] bg-[#0A74EF33] bg-blend-overlay bg-center bg-cover pt-30'>
			<div className='max-w-350 mx-auto border border-b-0 border-[#0A74EF33] p-[2.5rem_2.5rem_3.125rem_2.5rem] rounded-t-[1.25rem]'>
				<div className='flex justify-between pb-15 border-b-[1.2px] border-[#0A74EF33]'>
					<SVGClient src='/svg/wid-logo-2.svg' />
					{[
						{
							title: 'Get Involved',
							links: [
								{ label: 'Partner with us', url: '/partner' },
								{ label: 'Make a donation', url: '/donate' },
								{ label: 'WID Summit', url: '/' },
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
								{ label: 'About Us', url: '/about' },
								{ label: 'Code of Conduct', url: '/code-of-conduct' },
								{ label: 'Our Programs', url: '/programs/academy' },
								{ label: 'Meet the Team', url: '/team' },
							],
						},
						{
							title: 'Community',
							links: [
								{
									label: 'Discord Community',
									url: 'https://forms.gle/sVHUHnF9bz42BJui7',
								},
								{ label: 'WID Chapters', url: '/community/chapters' },
								{ label: 'Upcoming Events', url: '/community/events' },
								{ label: 'Blog', url: 'https://medium.com/women-in-defi' },
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
											<>
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
												{link.dropdownItems && (
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
											</>
										) : (
											renderLink(link)
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
							{
								url: 'https://twitter.com/womenindefi_org',
								icon: 'hugeicons:new-twitter-rectangle',
							},
							{
								url: 'https://www.instagram.com/womenindefi_org/',
								icon: 'hugeicons:instagram',
							},
							{
								url: 'https://www.linkedin.com/company/womenindefi/',
								icon: 'hugeicons:linkedin-01',
							},
							{ url: 'https://youtube.com/@womenindefi', icon: 'hugeicons:youtube' },
							{
								url: 'https://www.facebook.com/womenindefi',
								icon: 'hugeicons:facebook-01',
							},
							{ url: 'mailto:contact@womenindefi.org', icon: 'hugeicons:mail-01' },
						]?.map((socials, index) => (
							<a
								key={`__social__link__${index}`}
								href={socials?.url}
								target='_blank'
								rel='noopener noreferrer'
								className='hover:opacity-70 transition-opacity'
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
