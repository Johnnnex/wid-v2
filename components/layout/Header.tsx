'use client';

import { useState, useEffect } from 'react';
import { SVGClient } from '../common/SVGClient';
import { Button } from '../common/Button';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

const Header = () => {
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header className='bg-[#FFFFFF] fixed top-0 w-full px-20 z-50 transition-all duration-300'>
			<div
				className={cn(
					'flex justify-between max-w-350 mx-auto items-center transition-all duration-300',
					isScrolled ? 'py-4' : 'py-12'
				)}
			>
				<SVGClient src='/svg/wid-logo.svg' />
				<div className='flex items-center gap-10'>
					<nav className='w-full'>
						<ul className='flex gap-3'>
							{[
								{ name: 'Home', url: '/' },
								{ name: 'About Us', url: '/about' },
								{
									name: 'Programs',
									url: '/programs',
									dropdown: [
										{ name: 'WID Academy', url: '/programs/academy' },
										{ name: 'Initiatives', url: '/programs/initiatives' },
										{ name: 'Be a Mentor', url: '/programs/mentor' },
									],
								},
								{ name: 'Partner', url: '/partner' },
								{
									name: 'Community',
									url: '/community',
									dropdown: [
										{ name: 'WID Community', url: '/community' },
										{ name: 'WID Chapters', url: '/community/chapters' },
										{ name: 'Events', url: '/community/events' },
									],
								},
								{ name: 'Wid Store', url: '/store' },
							]?.map(({ name, url, dropdown }, index) => (
								<li
									className='p-2.5 relative'
									key={`__nav__item__${index}`}
									onMouseEnter={() => dropdown && setOpenDropdown(name)}
									onMouseLeave={() => setOpenDropdown(null)}
								>
									<Link
										className='hover:text-[#0A74EF] transition-colors duration-300 text-[#000000] text-[1rem] flex items-center gap-1'
										href={url}
									>
										{name}
										{dropdown && (
											<Icon
												icon='hugeicons:arrow-down-01'
												className={`transition-transform duration-300 ${
													openDropdown === name ? 'rotate-180' : ''
												}`}
											/>
										)}
									</Link>
									{dropdown && (
										<div
											className={cn(
												'absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg w-33.25 overflow-hidden transition-all duration-300 ease-in-out',
												openDropdown === name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
											)}
										>
											<div className='py-5 px-3'>
												{dropdown.map((item, idx) => (
													<Link
														key={idx}
														href={item.url}
														className={cn(
															`block text-[1rem] border-[#0A74EF33] text-center hover:text-[#0A74EF] transition-colors duration-300 text-black`,
															idx === 0 ? 'pb-5' : idx === 2 ? 'pt-5' : 'py-5',
															idx !== 2 && 'border-b'
														)}
													>
														{item.name}
													</Link>
												))}
											</div>
										</div>
									)}
								</li>
							))}
						</ul>
					</nav>
					<Button>Join the Movement</Button>
				</div>
			</div>
		</header>
	);
};

export { Header };
