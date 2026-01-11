/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import { inter } from '@/app/layout';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { client, urlFor } from '@/lib/sanity';
import { Icon } from '@iconify/react';
import { toast } from 'sonner';
import { Button } from '../common';
import FlipNumbers from 'react-flip-numbers';

interface Event {
	_id: string;
	title: string;
	description: string;
	image: any;
	eventDate: string;
	location?: string;
	ctaText: string;
	ctaLink: string;
}

const UpcomingEvents = () => {
	const [event, setEvent] = useState<Event | null>(null);
	const [loading, setLoading] = useState(true);
	const [countdown, setCountdown] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const fetchEvent = async () => {
			try {
				const data = await client.fetch(
					`*[_type == "event" && eventDate > now()] | order(eventDate asc)[0]`
				);
				setEvent(data);
			} catch {
				toast.error('Error fetching event!');
			} finally {
				setLoading(false);
			}
		};

		fetchEvent();
	}, []);

	useEffect(() => {
		if (!event) return;

		const interval = setInterval(() => {
			const now = new Date().getTime();
			const eventTime = new Date(event.eventDate).getTime();
			const distance = eventTime - now;

			if (distance < 0) {
				clearInterval(interval);
				return;
			}

			const days = Math.floor(distance / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setCountdown({ days, hours, minutes, seconds });
		}, 1000);

		return () => clearInterval(interval);
	}, [event]);

	if (loading) {
		return (
			<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-blend-overlay bg-[#0A74EF1A] bg-center bg-cover py-8 md:py-20'>
				<div className='max-w-350 mx-auto'>
					<div className='text-center'>
						<div className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#0A74EF] border-r-transparent'></div>
					</div>
				</div>
			</section>
		);
	}

	if (!event) {
		return (
			<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-blend-overlay bg-[#0A74EF1A] bg-center bg-cover py-8 md:py-20'>
				<div className='max-w-350 mx-auto'>
					<h2 className='font-semibold text-center text-[1.25rem] md:text-[2.5rem] mb-2 md:mb-5'>
						Upcoming Events
					</h2>
					<p
						className={cn(
							inter?.className,
							'text-[0.75rem] md:text-[1rem] font-normal text-center leading-5 md:leading-8 mb-6 md:mb-12'
						)}
					>
						Have a quick perusal of our catalogue of upcoming events, and join us.
					</p>
					<p className='text-[1.25rem] md:text-[2.5rem] font-medium text-black text-center'>
						No upcoming Events at the moment
					</p>
				</div>
			</section>
		);
	}

	const eventDate = new Date(event.eventDate);

	return (
		<section className='px-6 lg:px-20 bg-[url(/images/dust-bg.png)] bg-blend-overlay bg-[#0A74EF1A] bg-center bg-cover py-8 md:py-20'>
			<div className='max-w-350 mx-auto'>
				<h2 className='font-semibold text-center text-[1.25rem] md:text-[2.5rem] mb-2 md:mb-5'>
					Upcoming Events
				</h2>
				<p
					className={cn(
						inter?.className,
						'text-[0.75rem] md:text-[1rem] font-normal text-center leading-5 md:leading-8 mb-6 md:mb-12'
					)}
				>
					Have a quick perusal of our catalogue of upcoming events, and join us.
				</p>

				<div className='max-w-350 flex flex-col lg:flex-row gap-6 lg:gap-17 items-start mx-auto'>
					{event.image && (
						<img
							src={urlFor(event.image).width(800).height(800).url()}
							alt={event.image.alt || event.title}
							className='w-full lg:w-100 aspect-square object-cover rounded-xl md:rounded-[1.25rem]'
						/>
					)}

					<div className='flex-1 w-full'>
						<h3 className='text-[1.25rem] md:text-[2.5rem] font-medium text-center md:text-left mb-3 md:mb-5'>
							{event.title}
						</h3>

						{event.description && (
							<p
								className={cn(
									inter?.className,
									'text-black leading-5 md:leading-8 mb-4 md:mb-5 text-justify font-normal text-[0.75rem] md:text-[1rem]'
								)}
							>
								{event.description}
							</p>
						)}

						<div className='space-y-3 md:space-y-4 mb-5 md:mb-6'>
							<div className='flex items-center gap-3'>
								<Icon
									icon='mdi:calendar-clock'
									width='20'
									height='20'
									className='text-[#0A74EF] md:w-6 md:h-6'
								/>
								<span className='text-[0.75rem] md:text-[1rem] text-black font-normal'>
									{eventDate.toLocaleDateString('en-US', {
										weekday: 'long',
										year: 'numeric',
										month: 'long',
										day: 'numeric',
									})}
								</span>
							</div>

							<div className='flex items-center gap-3'>
								<Icon
									icon='mdi:clock-outline'
									width='20'
									height='20'
									className='text-[#0A74EF] md:w-6 md:h-6'
								/>
								<span className='text-[0.75rem] md:text-[1rem] text-black font-normal'>
									{eventDate.toLocaleTimeString('en-US', {
										hour: '2-digit',
										minute: '2-digit',
									})}
								</span>
							</div>

							{event.location && (
								<div className='flex items-center gap-3'>
									<Icon
										icon='mdi:map-marker'
										width='20'
										height='20'
										className='text-[#0A74EF] md:w-6 md:h-6'
									/>
									<span className='text-[0.75rem] md:text-[1rem] text-black font-normal'>
										{event.location}
									</span>
								</div>
							)}
						</div>

						<div className='bg-[#0A74EF] rounded-xl md:rounded-[1.25rem] p-4 md:p-6 mb-5 md:mb-6'>
							<p className='text-white text-[0.875rem] md:text-[1rem] font-medium mb-3 md:mb-4'>
								Event starts in:
							</p>
							<div className='grid grid-cols-4 gap-2 md:gap-4'>
								{[
									{ value: countdown.days, label: 'Days' },
									{ value: countdown.hours, label: 'Hours' },
									{ value: countdown.minutes, label: 'Mins' },
									{ value: countdown.seconds, label: 'Secs' },
								].map((item, index) => (
									<div
										key={index}
										className='bg-white/10 rounded-lg md:rounded-xl p-2 md:p-3 text-center'
									>
										<div className='text-white text-[1.25rem] md:text-[2rem] font-bold font-mono leading-none mb-1 flex justify-center'>
											<FlipNumbers
												height={
													typeof window !== 'undefined' && window.innerWidth >= 768 ? 32 : 20
												}
												width={
													typeof window !== 'undefined' && window.innerWidth >= 768 ? 20 : 13
												}
												color='white'
												background='transparent'
												play
												perspective={1000}
												numbers={String(item.value).padStart(2, '0')}
												duration={0.5}
											/>
										</div>
										<div className='text-white/80 text-[0.625rem] md:text-[0.875rem] font-normal'>
											{item.label}
										</div>
									</div>
								))}
							</div>
						</div>

						{event.ctaLink && (
							<Button
								url={event.ctaLink}
								target='_blank'
								className='w-full md:w-auto p-[.75rem_1.5rem] md:p-[1.25rem_2.5rem]'
								icon={{
									url: 'mdi:arrow-right',
									width: '1.25rem',
									height: '1.25rem',
								}}
							>
								{event.ctaText || 'Register Now'}
							</Button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export { UpcomingEvents };
